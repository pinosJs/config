// 参考 vite 源码
import colors from 'picocolors'
import prompts from 'prompts'
import semver from 'semver'
import { args, getPackageInfo, getVersionChoices, isDryRun, logRecentCommits, packages, run, runIfNotDry, step, updateVersion } from './release-utils'

async function main(): Promise<void> {
  let targetVersion: string | undefined

  const { pkg }: { pkg: string } = await prompts({
    type: 'select',
    name: 'pkg',
    message: 'Select package',
    choices: packages.map(i => ({ value: i, title: i }))
  })

  if (!pkg)
    return

  // 获取最近的commit的提交日志
  await logRecentCommits(pkg)

  const { currentVersion, pkgName, pkgPath, pkgDir } = getPackageInfo(pkg)

  if (!targetVersion) {
    const { release }: { release: string } = await prompts({
      type: 'select',
      name: 'release',
      message: 'Select release type',
      choices: getVersionChoices(currentVersion)
    })

    if (release === 'custom') {
      const res: { version: string } = await prompts({
        type: 'text',
        name: 'version',
        message: 'Input custom version',
        initial: currentVersion
      })
      targetVersion = res.version
    } else {
      targetVersion = release
    }
  }

  if (!semver.valid(targetVersion))
    throw new Error(`invalid target version: ${targetVersion}`)

  const tag = `${pkgName}@${targetVersion}`

  if (targetVersion.includes('beta') && !args.tag)
    args.tag = 'beta'

  if (targetVersion.includes('alpha') && !args.tag)
    args.tag = 'alpha'

  const { yes }: { yes: boolean } = await prompts({
    type: 'confirm',
    name: 'yes',
    message: `Releasing ${colors.yellow(tag)} Confirm?`
  })

  if (!yes)
    return

  step('\nUpdating package version...')
  updateVersion(pkgPath, targetVersion)

  step('\nGenerating changelog...')
  // https://zhuanlan.zhihu.com/p/392303778
  const changelogArgs = [
    'conventional-changelog',
    '-p',
    'angular',
    '-i',
    'CHANGELOG.md',
    '-s',
    '--commit-path',
    '.'
  ]
  changelogArgs.push('--lerna-package', pkgName)
  await run('npx', changelogArgs, { cwd: pkgDir })

  // 看是否有记录为提交，如果有，提交并打上tag
  const { stdout } = await run('git', ['diff'], { stdio: 'pipe' })
  if (stdout) {
    step('\nCommitting changes...')
    await runIfNotDry('git', ['add', '-A'])
    await runIfNotDry('git', ['commit', '-m', `release: ${tag}`])
    await runIfNotDry('git', ['tag', tag])
  } else {
    console.log('No changes to commit.')
  }

  step('\nPushing to GitHub...')
  await runIfNotDry('git', ['push', 'origin', `refs/tags/${tag}`])
  await runIfNotDry('git', ['push'])

  if (isDryRun) {
    console.log('\nDry run finished - run git diff to see package changes.')
  } else {
    console.log(
      colors.green(
        '\nPushed, publishing should starts shortly on CI.\nhttps://github.com/pinosJs/config/actions/workflows/publish.yml'
      )
    )
  }

  console.log()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

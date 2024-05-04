import semver from 'semver';
import packageJson from '../package.json' with { type: 'json' };

const { prerelease } = semver.parse(packageJson.version);
// prerelease: ['alpha', 1], ['beta', 1], ['rc', 1], [] (latest), etc.
if (prerelease.length === 0) {
  console.log('latest');
} else {
  console.log(prerelease[0]);
}

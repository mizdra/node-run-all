// @ts-check

import semver from 'semver';
import packageJson from '../package.json' with { type: 'json' };

const parseResult = semver.parse(packageJson.version);
if (parseResult === null) {
  throw new Error(`Invalid version: ${packageJson.version}`);
}

// parseResult.prerelease: ['alpha', 1], ['beta', 1], ['rc', 1], [] (latest), etc.
if (parseResult.prerelease.length === 0) {
  console.log('latest');
} else {
  console.log(parseResult.prerelease[0]);
}

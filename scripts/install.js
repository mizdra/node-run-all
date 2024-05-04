// Inspired by https://github.com/biomejs/biome/blob/f77ab54b7d5ab3f84a28def1e897b94107a9d16f/packages/%40biomejs/biome/bin/biome

import { execSync } from "child_process";
import { chmod, cp } from "fs/promises";
import { join } from "path";

const rootDirPath = join(import.meta.dirname, "..");

function isMusl() {
	let stderr;
	try {
		stderr = execSync("ldd --version", {
			stdio: ['pipe', 'pipe', 'pipe']
		});
	} catch (err) {
		stderr = err.stderr;
	}
	if (stderr.indexOf("musl") > -1) {
		return true;
	}
	return false;
}

const PLATFORMS = {
	win32: {
		x64: "node-run-all-win32-x64.exe",
		arm64: "node-run-all-win32-arm64.exe",
	},
	darwin: {
		x64: "node-run-all-darwin-x64",
		arm64: "node-run-all-darwin-arm64",
	},
	linux: {
		x64: "node-run-all-linux-x64",
		arm64: "node-run-all-linux-arm64",
	},
	"linux-musl": {
		x64: "node-run-all-linux-x64-musl",
		arm64: "node-run-all-linux-arm64-musl",
	},
};

const { platform, arch } = process;
const binPath = (platform === "linux" && isMusl()
		? PLATFORMS["linux-musl"][arch]
		: PLATFORMS[platform][arch]
	);

if (process.platform === "win32") {
  // NOTE: Permissions determine whether a file is executable or not on Linux.
  // However, the extension determines whether a file is executable or not on Windows.
  // Therefore, for windows, the extension is set to `.exe`.
  //
  // Executing `npx node-run-all` on Windows, `exec "node_modules\\.bin\\@mizdra\\node-run-all\\bin\\node-run-all"` be called.
  // It is then fallback by `PATHEXT` to the "node_modules\\.bin\\@mizdra\\node-run-all\\bin\\node-run-all.exe".
  await cp(join(rootDirPath, `dist/${binPath}`), join(rootDirPath, "bin/node-run-all.exe"));
} else {
  await cp(join(rootDirPath, `dist/${binPath}`), join(rootDirPath, "bin/node-run-all"));
  await chmod(join(rootDirPath, "bin/node-run-all"), 0o755);
}

import { cp } from "fs/promises";
import { join } from "path";

const rootDirPath = join(import.meta.dirname, "..");

if (process.platform === "win32") {
  // NOTE: Permissions determine whether a file is executable or not on Linux.
  // However, the extension determines whether a file is executable or not on Windows.
  // Therefore, for windows, the extension is set to `.exe`.
  //
  // Executing `npx node-run-all` on Windows, `exec "node_modules\\.bin\\@mizdra\\node-run-all\\bin\\node-run-all"` be called.
  // It is then fallback by `PATHEXT` to the "node_modules\\.bin\\@mizdra\\node-run-all\\bin\\node-run-all.exe".
  await cp(join(rootDirPath, 'target/x86_64-pc-windows-gnu/release/node-run-all.exe'), join(rootDirPath, "bin/node-run-all.exe"));
} else if (process.platform === "darwin") {
  await cp(join(rootDirPath, 'target/aarch64-apple-darwin/release/node-run-all'), join(rootDirPath, "bin/node-run-all"));
}

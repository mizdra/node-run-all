import { cp } from "fs/promises";
import { join } from "path";

const rootDirPath = join(import.meta.dirname, "..");
const binaryDistPath = join(rootDirPath, "bin/node-run-all");

if (process.platform === "win32") {
  await cp(join(rootDirPath, 'target/x86_64-pc-windows-gnu/release/node-run-all.exe'), binaryDistPath);
} else if (process.platform === "darwin") {
  await cp(join(rootDirPath, 'target/aarch64-apple-darwin/release/node-run-all'), binaryDistPath);
}

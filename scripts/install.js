import { cp } from "fs/promises";
import { join } from "path";

const binarySrcPath = join(import.meta.dirname, "../target/release/node-run-all");
const binaryDistPath = join(import.meta.dirname, "../bin/node-run-all");

await cp(binarySrcPath, binaryDistPath);

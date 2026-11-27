import { cp, mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist");
const externalsPath = path.join(
  distDir,
  "server",
  "vinext-externals.json",
);
const externals = JSON.parse(await readFile(externalsPath, "utf8"));

if (externals.length > 0) {
  throw new Error(
    `Sites requires a self-contained server bundle. Still external: ${externals.join(
      ", ",
    )}`,
  );
}

const serverDir = path.join(distDir, "server");
await rm(path.join(serverDir, "handler.js"), { force: true });
await rename(path.join(serverDir, "index.js"), path.join(serverDir, "handler.js"));
await cp(
  path.join(root, "scripts", "sites-server-entry.mjs"),
  path.join(serverDir, "index.js"),
);

await mkdir(path.join(distDir, ".openai"), { recursive: true });
await cp(
  path.join(root, ".openai", "hosting.json"),
  path.join(distDir, ".openai", "hosting.json"),
);
await writeFile(
  path.join(distDir, "package.json"),
  `${JSON.stringify({ private: true, type: "module" }, null, 2)}\n`,
);

console.log("Packaged a self-contained Vinext server bundle for Sites.");

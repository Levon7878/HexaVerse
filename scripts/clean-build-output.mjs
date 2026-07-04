import { existsSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const siteRoot = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const projectRoot = join(siteRoot, "project");

for (const root of [siteRoot, projectRoot]) {
  for (const target of ["assets", "dist"]) {
    const path = join(root, target);
    if (existsSync(path)) {
      rmSync(path, { recursive: true, force: true });
    }
  }
}

for (const file of ["index.html", "favicon.ico", "__redirects"]) {
  const path = join(siteRoot, file);
  if (existsSync(path)) {
    rmSync(path, { force: true });
  }
}

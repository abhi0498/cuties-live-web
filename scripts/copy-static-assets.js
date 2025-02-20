import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, "../public");
const outDir = path.join(__dirname, "../out");
const targetDir = path.join(outDir, "cuties-live-web");

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy all files from public to out/cuties-live-web
function copyFiles(source, target) {
  const files = fs.readdirSync(source);

  files.forEach((file) => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath);
      }
      copyFiles(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

// Copy public files
copyFiles(sourceDir, targetDir);

// Copy Next.js static files
const nextStaticSource = path.join(outDir, "_next");
const nextStaticTarget = path.join(targetDir, "_next");

if (fs.existsSync(nextStaticSource)) {
  if (!fs.existsSync(nextStaticTarget)) {
    fs.mkdirSync(nextStaticTarget, { recursive: true });
  }
  copyFiles(nextStaticSource, nextStaticTarget);
}

console.log("Static assets copied successfully");

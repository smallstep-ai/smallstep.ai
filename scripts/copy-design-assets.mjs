import fs from "node:fs";
import path from "node:path";

const copies = [
  ["design/assets/shared", "public/images/shared"],
  ["design/assets/misal", "public/images/misal"],
  ["design/assets/making-misal", "public/images/making-misal"],
];

for (const [from, to] of copies) {
  fs.mkdirSync(to, { recursive: true });
  for (const file of fs.readdirSync(from)) {
    fs.copyFileSync(path.join(from, file), path.join(to, file));
  }
}

console.log("copied known route assets");

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist';
/** @type {string[]} */
const files = [];
/** @param {string} directory */
function walk(directory) {
  for (const name of readdirSync(directory)) {
    const path = join(directory, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (path.endsWith('.html')) files.push(path);
  }
}
walk(root);
const broken = [];
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  for (const href of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const target = href[1].replace(/\/$/, '') || '/';
    const candidate = target === '/' ? join(root, 'index.html') : join(root, target, 'index.html');
    if (!existsSync(candidate) && !existsSync(join(root, target))) broken.push(`${file}: ${href[1]}`);
  }
}
if (broken.length) { console.error(broken.join('\n')); process.exit(1); }
console.log(`Checked ${files.length} HTML files; internal links are valid.`);

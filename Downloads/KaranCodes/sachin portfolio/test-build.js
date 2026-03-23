import { build } from 'vite';
import fs from 'fs';

async function runBuild() {
  try {
    await build();
  } catch (e) {
    fs.writeFileSync('error.json', JSON.stringify(e.errors || { message: e.message }, null, 2));
    process.exit(1);
  }
}
runBuild();

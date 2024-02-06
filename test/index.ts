import fs from 'node:fs';
import path from 'node:path';

const runTests = async (dir: string) => {
  const testDir = path.join(__dirname, dir);
  const files = fs.readdirSync(testDir);

  for (const file of files) {
    if (file.endsWith('.ts')) {
      await import(path.join(testDir, file));
    }
  }
};

(async () => {
  await runTests('./unit/mount-queries');
  await runTests('./integration');
})();

process.on('exit', (code) => console.log('Exited with code:', code));

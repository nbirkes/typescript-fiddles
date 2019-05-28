import { createWriteStream, readFileSync } from 'fs';

main();

function main(): void {
  const text = readFileSync('./data/sagan.txt');
  const file = createWriteStream('./output/big.file');
  for (let i = 0; i <= 1e6; i++) file.write(text);
  file.end();
}

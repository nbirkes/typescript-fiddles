import { readFileSync } from 'fs';

main();

function main(): void {
  const filename = process.argv.slice(2)[0];

  console.log(hexdump(filename));
}

function hexdump(filename: string): string {
  let buffer = readFileSync(filename);
  let lines: any[] = [];

  for (let i = 0;i< buffer.length;i += 16) {
    let address = i.toString(16).padStart(8, '0');
    let block = buffer.slice(i, i + 16);
    let hexArray: string[] = [];
    let asciiArray: string[] = [];

    for (let value of block) {
      hexArray.push(value.toString(16).padStart(2, '0'));
      asciiArray.push(value >= 0x20 && value < 0x7f ? String.fromCharCode(value) : '.');
    }

    let hexString = hexArray.join(' ');
    let asciiString = asciiArray.join('');

    lines.push(`${address}  ${hexString}  |${asciiString}|`);
  }

  return lines.join('\n');
}

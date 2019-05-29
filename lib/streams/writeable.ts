import { Writable } from 'stream';

main();

function main(): void {
  const outStream = new Writable({
    write(chunk: any, encoding: string, callback: Function): any {
      console.log(chunk.toString());
      callback();
    }
  });
  process.stdin.pipe(outStream);
}

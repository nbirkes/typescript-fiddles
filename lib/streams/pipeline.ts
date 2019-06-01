import { pipeline } from 'stream';
import { promisify } from 'util';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const pipelineProm = promisify(pipeline);

main().catch(console.error);

async function main(): Promise<void> {
  const read = createReadStream('./data/archive.tar');
  const zip = createGzip();
  const write = createWriteStream('./output/archive.tar.gz');

  await pipelineProm(read, zip, write);

  console.log('Pipeline succeeded.');
}

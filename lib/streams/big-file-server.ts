import { createReadStream } from 'fs';
import { createServer } from 'http';

const server = createServer();

server.on("request", (req: any, res: any) => {
  const src = createReadStream('./output/big.file');
  src.pipe(res);
});

server.listen(8000);

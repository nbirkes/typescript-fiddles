import {EventEmitter} from 'events';

// class NcbEmitter extends EventEmitter {}

const ncbEmitter = new EventEmitter();

ncbEmitter.on('event', (name: string) => {
  console.log(`a ${name} event occurred`);
});

ncbEmitter.emit('event', 'Nathan');

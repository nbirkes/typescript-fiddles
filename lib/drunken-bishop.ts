// https://codegolf.stackexchange.com/questions/59670/the-drunken-bishop

const ROOM_WIDTH = 17;
const ROOM_HEIGHT = 8;

export function drunkenBishop(): void {
  console.log('drunken bishop');
}

export class DrunkenBishop {
  private readonly room: string[][];
  private readonly originalInput: string;
  private readonly parts: string[];

  constructor(input: string) {
    this.originalInput = input;
    this.parts = input.split(':');
    this.room = buildRoom();
  }

  render(): string {
    let result = '+-----------------+\n';

    for (let w = 0;w< this.room.length;w++) {
      result += '|';
      for (let h = 0;h<this.room[w].length;h++) {
        result += this.room[w][h];
      }

      result += w === this.room.length ? '|' : '|\n';
    }

    result += '+-----------------+';

    return result;
  }
}

export function buildRoom(): string[][] {
  let room: string[][] = [];

  for (let h = 0; h < ROOM_HEIGHT; h++) {
    room.push([]);
    for (let w = 0; w < ROOM_WIDTH; w++) {
      room[h].push(' ');
    }
  }

  return room;
}

// https://codegolf.stackexchange.com/questions/59670/the-drunken-bishop

const ROOM_HEIGHT = 8;
const ROOM_WIDTH = 17;
const X = 8;
const Y = 4;
const UP = -1;
const DOWN = 1;
const LEFT = -1;
const RIGHT = 1;

export function drunkenBishop(): void {
  let db = new DrunkenBishop('37:e4:6a:2d:48:38:1a:0a:f3:72:6d:d9:17:6b:bd:5e', ROOM_HEIGHT, ROOM_WIDTH, X, Y);
  console.log(db.render());
}

export class DrunkenBishop {
  private readonly roomHeight: number;
  private readonly roomWidth: number;
  private readonly room: string[][];
  private readonly input: string;
  private readonly steps: string[];
  private x: number;
  private y: number;

  constructor(input: string, roomHeight: number, roomWidth: number, x: number, y: number) {
    this.input = input;
    this.roomHeight = roomHeight;
    this.roomWidth = roomWidth;
    this.x = x;
    this.y = y;
    this.steps = this.buildSteps();
    this.room = this.buildRoom();
    this.markPosition();
    this.run();
  }

  buildSteps(): string[] {
    return this.input.split(':').reduce((acc: string[], cur: string) => {
      let octet = hexToBin(cur);
      acc.push(octet.substr(6, 2));
      acc.push(octet.substr(4, 2));
      acc.push(octet.substr(2, 2));
      acc.push(octet.substr(0, 2));
      return acc;
    }, []);
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

  markPosition(): void {
    try {
      this.room[this.y][this.x] = 'S';
    } catch (e) {
      console.log(this.x, this.y, e.message);
    }
  }

  run(): void {
    for (let step of this.steps) {
      this.move(stepToDirection(step));
      this.markPosition();
    }
  }

  move(direction: [number, number]): void {
    let [x, y] = direction;
    this.moveX(x);
    this.moveY(y);
  }

  private moveX(x: number): void {
    let newX = this.x + x;
    if (newX < 0) return;
    if (newX > this.roomWidth) return;
    this.x = newX;
  }

  private moveY(y: number): void {
    let newY = this.y + y;
    if (newY < 0) return;
    if (newY > this.roomHeight) return;
    this.y = newY;
  }

  buildRoom(): string[][] {
    let room: string[][] = [];
    for (let h = 0; h < this.roomHeight; h++) {
      room.push([]);
      for (let w = 0; w < this.roomWidth; w++) {
        room[h].push(' ');
      }
    }
    return room;
  }
}

function hexToBin(hex: string): string {
  return (parseInt(hex, 16).toString(2)).padStart(8, '0');
}

function stepToDirection(step: string): [number, number] {
  switch(step) {
    case '00':
      return [UP, LEFT];
    case '01':
      return [UP, RIGHT];
    case '10':
      return [DOWN, LEFT];
    case '11':
      return [DOWN, RIGHT];
    default:
      throw new Error(`Step is invalid: ${step}`);
  }
}

// https://codegolf.stackexchange.com/questions/59670/the-drunken-bishop

const UP = -1;
const DOWN = 1;
const LEFT = -1;
const RIGHT = 1;
const S_KEY = 15;
const E_KEY = 16;

const CHAR_MAP = new Map<number, string>([
  [0, ' '],
  [1, '.'],
  [2, 'o'],
  [3, '+'],
  [4, '='],
  [5, '*'],
  [6, 'B'],
  [7, 'O'],
  [8, 'X'],
  [9, '@'],
  [10, '%'],
  [11, '&'],
  [12, '#'],
  [13, '/'],
  [14, '^'],
  [15, 'S'],
  [16, 'E'],
]);

export function drunkenBishop(): void {
  let db = new DrunkenBishop('16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48');
  console.log(db.render());
}

export class DrunkenBishop {
  private readonly roomHeight: number;
  private readonly roomWidth: number;
  private readonly room: number[][];
  private readonly input: string;
  private readonly steps: string[];
  private x: number;
  private y: number;

  constructor(input: string) {
    this.input = input;
    this.roomHeight = 9;
    this.roomWidth = 17;
    this.x = 8;
    this.y = 4;
    this.steps = this.buildSteps();
    this.room = this.buildRoom();
    this.markPosition();
    this.run();
  }

  render(): string {
    const wall = '+' + '-'.repeat(this.roomWidth) + '+';
    const rows = this.room.reduce((acc: string[], cur: number[]) => {
      acc.push(cur.map(it => valueToChar(it)).join(''));
      return acc;
    }, []);

    return wall + '\n' + rows.map(it => `|${it}|\n`).join('') + wall;
  }

  private buildSteps(): string[] {
    return this.input.split(':').reduce((acc: string[], cur: string) => {
      let octet = hexToBin(cur);
      acc.push(octet.substr(6, 2));
      acc.push(octet.substr(4, 2));
      acc.push(octet.substr(2, 2));
      acc.push(octet.substr(0, 2));
      return acc;
    }, []);
  }

  private getValue(x: number, y: number): number {
    return this.room[y][x];
  }

  private setValue(x: number, y: number, value: number): void {
    this.room[y][x] = value;
  }

  private markStart(): void {
    this.markPosition(S_KEY);
  }

  private markEnd(): void {
    this.markPosition(E_KEY);
  }

  private markPosition(override?: number): void {
    if (override !== undefined) this.setValue(this.x, this.y, override);
    const value = this.getValue(this.x, this.y);
    if (value === S_KEY) return;
    if (value === E_KEY) return;
    this.setValue(this.x, this.y, value + 1);
  }

  private run(): void {
    this.markStart();
    for (let step of this.steps) {
      this.move(stepToDirection(step));
      this.markPosition();
    }
    this.markEnd();
  }

  private move(direction: [number, number]): void {
    let [x, y] = direction;
    this.moveX(x);
    this.moveY(y);
  }

  private moveX(x: number): void {
    let newX = this.x + x;
    if (newX < 0) return;
    if (newX > this.roomWidth - 1) return;
    this.x = newX;
  }

  private moveY(y: number): void {
    let newY = this.y + y;
    if (newY < 0) return;
    if (newY > this.roomHeight - 1) return;
    this.y = newY;
  }

  private buildRoom(): number[][] {
    let room: number[][] = [];
    for (let h = 0; h < this.roomHeight; h++) {
      room.push([]);
      for (let w = 0; w < this.roomWidth; w++) {
        room[h].push(0);
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

function valueToChar(value: number): string {
  const char = CHAR_MAP.get(value);
  if (!char) throw new Error(`Value not found: ${value}`);
  return char;
}

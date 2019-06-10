
main();

function main(): void {
  const nathanBin: number[] = [
    0b01001110,
    0b01100001,
    0b01110100,
    0b01101000,
    0b01100001,
    0b01101110,
  ];

  const birkesHex: number[] = [
    0x42,
    0x69,
    0x72,
    0x6B,
    0x65,
    0x73,
  ];

  let nameText: string[] = [];

  for (let value of nathanBin) {
    nameText.push(String.fromCharCode(value));
  }

  nameText.push(' ');

  for (let value of birkesHex) {
    nameText.push(String.fromCharCode(value));
  }

  console.log('What\'s my name? ' + nameText.join(''));
}


main();

function main(): void {
  const dog = '🐶';
  const dog2 = '\uD83D\uDC36';
  const lady = '\uD83D\uDC69';
  const heart = '\u200D\u2764\uFE0F\u200D';
  const ladyHeart = lady + heart + lady;

  console.log(dog);
  console.log(dog2);
  console.log(lady);
  console.log(heart);
  console.log(ladyHeart, ladyHeart.length);
}

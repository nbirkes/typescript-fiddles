export function enums(): void {
  enum Birkes {
    Nathan = 'nathan',
    Courtney = 'courtney',
    Dylan = 'dylan',
    Hayden = 'hayden',
  }

  enum Dogs {
    Abigail,
    Harriet,
    Benjamin,
  }

  interface Human {
    id: Birkes;
    age: number;
  }

  let dylan: Human = {
    id: Birkes.Dylan,
    age: 14,
  };

  let dad = Birkes.Nathan;
  let abby = Dogs.Abigail;

  switch (getX()) {
    case Birkes.Nathan:
      console.log('Hello Nathan!');
      break;
    default:
      console.log('I dont know you');
  }

  console.log(Birkes.Nathan === 'nathan');
  console.log(typeof dylan);
  console.log(JSON.stringify({ dylan }, null, 2));

  console.log(typeof abby);
  console.log(JSON.stringify({ abby }, null, 2));

  console.log(dad);
  console.log(dad.toString());
  console.log(typeof dad);
  console.log(JSON.stringify({ dad }, null, 2));
}

function getX(): string {
  return 'benny';
}

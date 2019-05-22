interface Person {
  name: string;
}

(() => {
  let people: Person[] = [
    { name: 'Nathan' },
    { name: 'Courtney' },
    { name: 'Dylan' },
    { name: 'Hayden' },
  ];

  let person = people.find(({ name = '' }) => name === 'Nathan');
  console.log(person);
})();

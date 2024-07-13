interface Person {
  name: string;
  age: number;
}
//create array of person
const people: Person[] = [
  { name: "John Lee", age: 30 },
  { name: "Marry Burber", age: 25 },
  { name: "Henny Kong", age: 35 },
];

//Function to filter people
function filteradults(persons: Person[]): Person[] {
  return persons.filter((person) => person.age >= 30);
}

const adults = filteradults(people);
console.log(adults);

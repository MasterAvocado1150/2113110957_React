//create array of person
var people = [
    { name: 'John Lee', age: 30 },
    { name: 'Marry Burber', age: 25 },
    { name: 'Henny Kong', age: 35 }
];
//Function to filter people
function filteradults(persons) {
    return persons.filter(function (person) { return person.age >= 30; });
}
var adults = filteradults(people);
console.log(adults);

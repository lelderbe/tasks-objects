const people = [];
const name = 'person';

// Заполни массив people строками, чтобы получилось: [ 'person1', 'person2', 'person3' ]
// Используй цикл for..i и переменную name для создания строк

for (let i = 1; i <= 3; i++) {
  people.push(name + i);
}

// выведи массив people в консоль

console.log(people);

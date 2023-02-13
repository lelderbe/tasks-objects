const people = {};
const name = 'person';

// Заполни объект people ключами 'personX', чтобы получилось:
// {
//   person1: 1,
//   person2: 2,
//   person3: 3,
// }
// Используй цикл for..i и переменную name для создания ключей

for (let i = 1; i <= 3; i++) {
  people[name + i] = i;
}

// выведи объект people в консоль

console.log(people);

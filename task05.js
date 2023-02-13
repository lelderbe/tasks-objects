const people = [
  { name: 'Joe', age: 21 },
  { name: 'Mary', age: 18 },
  { name: 'Fred', age: 32 },
  { name: 'Karen', age: 25 },
  { name: 'Kerrigan', age: 33 },
];

// Выведи в консоль только те объекты, у которых возраст меньше 30
// (используй цикл for..of)

for (let item of people) {
  if (item.age < 30) {
    console.log(item);
  }
}

console.log('---------------');

// Выведи в консоль только те объекты, у которых первая буква имени 'K'
// (используй цикл for..of)

for (let item of people) {
  if (item.name[0] === 'K') {
    console.log(item);
  }
}

console.log('---------------');
// Выведи в консоль только те объекты, у которых возраст меньше 30 и первая буква имени 'K'
// (используй цикл for..of)

for (let item of people) {
  if (item.age < 30 && item.name[0] === 'K') {
    console.log(item);
  }
}

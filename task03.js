const people = [
  { name: 'Joe', age: 21 },
  { name: 'Mary', age: 18 },
];

// Выведи в консоль имена людей (name) из массива 'people'
// (используй цикл for..of)
for (let item of people) {
  console.log(item['name']);
  console.log(item.name);
}

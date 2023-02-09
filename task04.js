const people = [
  { name: 'Joe', age: 21 },
  { name: 'Mary', age: 18 },
];

// Добавь каждому объекту в массиве ещё одно свойство: job со значением 'IT'
// (используй цикл for..of)
for (let item of people) {
  // console.log(item);
  item.job = 'IT';
}

// выведи массив в консоль
console.log(people);

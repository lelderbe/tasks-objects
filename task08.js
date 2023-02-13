const obj1 = {
  name: 'Joe',
  age: 21,
};

const obj2 = {
  car: 'Toyota',
  carColor: 'red',
  carYear: 2002,
};

// Добавь все ключи (с их значениями) из obj2 в obj1
// используй for..in для перебора всех ключей в obj2

for (let key in obj2) {
  obj1[key] = obj2[key];
  // console.log(obj1);
}
console.log(obj1);

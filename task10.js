const obj1 = {
  name: 'Joe',
  age: 21,
};

const obj2 = {
  car: 'Toyota',
  carColor: 'red',
  carYear: 2002,
};

// Создай новый объект obj3, куда добавь все ключи (с их значениями) из obj1 и obj2
// используй деструктуризацию

const obj3 = { ...obj1, ...obj2 };

// выведи obj3 в консоль

console.log(obj3);

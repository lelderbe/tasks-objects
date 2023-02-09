const joe = {
  name: 'Joe',
  age: 21,
  hobbie: {
    title: 'Piano',
    rating: 7,
  },
};

const mary = {
  name: 'Mary',
  age: 18,
  hobbie: {
    title: 'Books',
    rating: 8,
  },
};

// выведи в консоль название (title) хобби joe и mary
console.log(joe.hobbie.title);
console.log(mary.hobbie.title);

// добавь mary свойство 'job' со значением 'IT'
// const job = 'IT';
// mary.job = job;
// console.log(mary);

mary.job = 'IT';

// выведи mary в консоль

console.log(mary);

// удали у joe свойство 'hobbie'

delete joe.hobbie;

// dsdtlb joe в консоль

console.log(joe);

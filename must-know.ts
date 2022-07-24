// ==== 1 ====

import { stringify } from "querystring";

const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100];
let minValue = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < minValue) {
    // numbers[i] > minValue ==> найдем maxValue
    minValue = numbers[i];
  }
}
console.log(minValue);

const numbers_2 = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100];
let maxValue = +numbers_2
  .sort((a, b) => b - a)
  .slice(0, 1)
  .join();

console.log(maxValue);

// ==== 2 ====
// ==== FACTORIAL ====

const factorial = (n: number): number => (n ? n * factorial(n - 1) : 1);

console.log(factorial(5));

// ==== должно вернуть n-е число Фибоначи
const fibonachi = (n: number): number => {
  return n - 2 + n - 1;
};

// ==== numbers sum ====
// рекурсия ==> 3
// цикл ==> 2
// формула ==> 1

function sumTo(n: number) {
  if (n == 1) return 1;
  let sum: number = n + sumTo(n - 1);

  return sum;
}

alert(sumTo(100));

const summ = (n: number): number => {
  let summa: number = 0;

  for (let i = 0; i <= n; i++) {
    summa += i;
  }

  return summa;
};

alert(summ(100));

function sumToN(n) {
  return (n * (n + 1)) / 2;
}

alert(sumToN(100));

// ====  Call, apply, bind ====
// ==== bind ====

function foo() {
  console.log(this.name);
}

let a: any = { name: "Maxim" };
let b: any = { name: "Pavel" };

const bindedFooA = foo.bind(a);
const bindedFooB = foo.bind(b);

bindedFooA();
bindedFooB();

function bar(age: number, city: string) {
  console.log(`${this.name}, ${age}, ${city}`);
}

const bindedBarA = bar.bind(a, 30);
const bindedBarB = bar.bind(b, 18);

bindedBarA("Tbilisi");
bindedBarB("Minsk");

// ==== call / apply ====

function func(age: number, city: string) {
  console.log(`this.name, ${age}, ${city}`);
}

let c = { name: "Olga" };
let d = { name: "Karina" };

func.apply(a, [31, "Tbilisi"]);
func.call(b, 18, "Minsk");

// ====  map, filter, reduce ====

[18, 20, 12].map((age) => {
  if (age >= 18) {
    return { age: age, adult: true };
  } else {
    return { age, adult: false };
  }
});

[
  { age: 40, sex: "f", name: "Olga" },
  { age: 20, sex: "f", name: "Karina" },
  { age: 7, sex: "m", name: "Pavel" },
  { age: 33, sex: "m", name: "Maxim" },
].filter((person) => {
  return person.age >= 18 && person.sex === "f";
});

["Minsk", "Moscow", "", "", "London", ""].reduce((acc, el) => {
  if (el !== "") acc++;
  return acc;
}, 0);

[
  { age: 40, sex: "f", name: "Olga" },
  { age: 20, sex: "f", name: "Karina" },
  { age: 7, sex: "m", name: "Pavel" },
  { age: 33, sex: "m", name: "Maxim" },
].reduce((acc, person) => {
  if (person.age >= 18 && person.sex === "f") {
    // acc.push(person); ???
  }
  return acc;
}, []);

// ==== CLOUSURES ====

function makeCounter() {
  var currentCount = 1;
  return function () {
    // (**)
    return currentCount++;
  };
}

// Счетчики будут независимыми

let counter = makeCounter();
let counter2 = makeCounter();

//  ==== class/extends ====

// interface ICar {
//   name: string;
//   subName: string;
// }

class Car {
  name: string;
  subName: string;
  constructor(name: string, subName: string) {
    this.name = name;
    this.subName = subName;
  }

  drive() {
    alert("Enjoy driving" + " " + this.name + " " + this.subName);
  }
}

const Renault = new Car("Renault", "Megane");
console.log(Renault);
console.log(Renault.drive());

class CarOption extends Car {
  klimat: boolean;
  cruise: boolean;
  naviagtion: boolean;
  constructor(
    name: string,
    subName: string,
    klimat: boolean,
    cruise: boolean,
    naviagtion: boolean
  ) {
    super(name, subName);
    (this.klimat = klimat),
      (this.cruise = cruise),
      (this.naviagtion = naviagtion);
  }

  drive() {
    super.drive();
    alert("...fa-fa");
  }
}

const Renault_options = new CarOption("Renault", "Megane", false, false, true);

console.log(Renault_options);
console.log(Renault_options.drive());

// ==== Промисификация, setInterval, setTimeout ====

const someFunc = (sec: number) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      alert("Hello. Promise");
    }, sec * 1000);
  });

  return promise;
};

someFunc(2).then((res) => console.log("promise success"));

"use strict";
console.log("Just to check ");

//arrow function
// const calAverage = (a, b, c) => (a + b + c) / 3;

//     console.log(calAverage(3,4,5))

// const calAverage = function (a, b, c) {
//   return (a + b + c) / 3;
// };

const checkWinner = function (avgDolphines, avgKoalas) {
  if (avgDolphines >= 2 * avgKoalas) {
    console.log(`Dolphines win ${avgDolphines} vs ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphines) {
    console.log(`Koalas win `);
  } else {
    console.log(`No team wins `);
  }
};

const scoreDolphines = calAverage(44, 23, 71);
const scoreKoalas = calAverage(65, 54, 49);

console.log(checkWinner(scoreDolphines, scoreKoalas));
console.log(checkWinner(544, 111));

challenge 2
const bill = 100;

const calcTip = function (bill) {
  return bill >= 50 && bill <= 350 ? bill * 0.15 : bill * 0.2;
};

console.log(calcTip(100));

const bills = [125, 555, 444];

const tips = [calcTip(bills[0]), calcTip(bills[1], calcTip(bills[2]))];
const total = [
  bills[0] + calcTip(bills[0]),
  bills[1] + calcTip(bills[1], bills[2]) + calcTip(bills[2]),
];
console.log(total);

//challenge 3

const p1 = {
  name: "mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2; //we are storing
    return this.bmi; // careful with the method in class
  },
};

const p2 = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2; //we are storing
    return this.bmi;
  },
};

p1.calcBMI();
p2.calcBMI();

console.log(p1.bmi, p2.bmi);

if (p1.bmi > p2.bmi) {
  console.log(
    `${p1.name} has heigher BMI (${p1.bmi}) than ${p2.name}' BMi(${p2.bmi})`
  );
} else {
  console.log(
    `${p2.name} has heigher BMI (${p2.bmi}) than ${p1.name}' BMi(${p1.bmi})`
  );
}

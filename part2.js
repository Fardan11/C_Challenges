console.log("Just to check ");

//arror function
// const calAverage = (a, b, c) => (a + b + c) / 3;

//     console.log(calAverage(3,4,5))

const calAverage = function (a, b, c) {
  return (a + b + c) / 3;
};

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

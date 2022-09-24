//let js = "amazing";
//if (js === "amazing") {
//alert("javaScript is fun!");
//} else {
//alert("boring");
//}
//console.log(20 + 40 + 10);
// coding challenging #2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const markBMI = massMark / heightMark ** 2;
// const johnBMI = massJohn / (heightJohn * heightJohn);
// // console.log(massMark, johnBMI);
// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI ${markBMI} is hihger than John's${johnBMI}!`);
// } else {
//   console.log(`John's BMI ${johnBMI} is higher than Mark's!${markBMI}`);
// }
// // coding challenge #3
// const dolphinsScore = 96 + 108 + 89;
// const koalasScore = 88 + 91 + 110;
// const averageDolphinScore = dolphinsScore / 3;
// const averageKoalasScore = koalasScore / 3;
// console.log(averageDolphinScore, averageKoalasScore);

// if (averageDolphinScore > averageKoalasScore) {
//   console.log(`Dolphins is the winner`);
// } else if (averageKoalasScore > averageDolphinScore) {
//   console.log(`Koalas is the winner`);
// } else if (averageDolphinScore === averageKoalasScore) {
//   console.log(`No one wins the trophy`);
// } else {
//   console.log(`They are both losser`);
// }
// const dolphinsBonus = 97 + 112 + 101;
// const koalasBonus = 109 + 95 + 123;
// console.log(dolphinsBonus, koalasBonus);

// if (dolphinsBonus > koalasBonus) {
//   console.log(`Dolphins is the winner`);
// } else if (koalasBonus > dolphinsBonus) {
//   console.log(`Koalas is the winner`);
// } else {
//   console.log(`No one is the winner`);
// }

// if (dolphinsBonus >= 100) {
//   console.log(`Dolphins wins the trophy`);
// } else if (koalasBonus >= 100) {
//   console.log(`Koalas wins the trophy`);
// } else if (dolphinsBonus === koalasBonus) {
//   console.log(`They are both winners`);
// } else {
//   console.log(`There is no winner`);
// }

// const dolphinsBonus2 = 97 + 112 + 101;
// const koalasBonus2 = 109 + 95 + 106;
// if (dolphinsBonus2 === koalasBonus2) {
//   console.log(`draw`);
// } else if (dolphinsBonus2 >= 100) {
//   console.log(`Dolphins win the trophy`);
// } else if (koalasBonus2 >= 100) {
//   console.log(`Koalas win the trophy`);
// } else {
//   console.log(`No one wins the Trophy`);
// }

// const day = "Wednesday";

// if (day === "Monday") {
//   console.log("Plane Course structure");
//   console.log("Go to coding meetup");
// } else if (day === "Teusday") {
//   console.log("prepare theory videos");
// } else if (day === "Wednesday" || day === "Thursday") {
//   console.log("write code examples");
// } else if (day === "friday") {
//   console.log("Record Videos");
// } else if (day === "Saturday" || day === "Sunday") {
//   console.log("Enjoy the weekend: D");
// } else {
//   console.log("Not a valid day!");
// }

// // codeing challenge #4 using ternary operator
// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `the bill was ${bill}, the tip was ${tip},and the total value ${bill + tip}`
// );

// function calcAverage() {
//   const Dolphins = (44 + 23 + 71) / 3;
//   const Koalas = (65 + 54 + 49) / 3;
//   return `Dolphins average score is ${Dolphins} and Koalas average score is ${Koalas}.`;
// }
// console.log(calcAverage("Dolphins", "Koalas"));
// // function coding challenge #1
// const calcAverage3 = (a, b, c) => (a + b + c) / 3;
// const scoreDolphins = calcAverage3(44, 23, 71);
// const scoreKoalas = calcAverage3(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);
// // 3
// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (scoreDolphins >= 2 * scoreKoalas) {
//     return `Dolphins wins`;
//   } else if (scoreKoalas >= 2 * scoreDolphins) {
//     return `Koalas wins`;
//   } else {
//     return `No team wins!`;
//   }
// };
// console.log(checkWinner(scoreDolphins, scoreKoalas));
// // my practise
// function fruitProcessor(apples, oranges) {
//   const towel = `juice with ${apples} apples and ${oranges} oranges.`;
//   return towel;
// }
// const towel = fruitProcessor(3, 8);
// console.log(towel);
// fashion practise
function adeollarFahsionStudio(
  firstName,
  bodySize,
  height,
  age,
  width,
  complextion
) {
  const fashion = `Mrs ${firstName} bodysize is ${bodySize},with the gown lenght of ${height},she is ${age} years old.Her burst measurment is ${width} and she is ${complextion} in complextion.`;
  return fashion;
}

let customer1 = adeollarFahsionStudio("Seyi", 14, 80, 24, 35, "light");
console.log(customer1);
const customer2 = adeollarFahsionStudio("Kemi", 24, 80, 24, 45, "light");
console.log(customer2);

bodySize = 14;
if (bodySize >= 10 && bodySize <= 16) {
  console.log(`she can buy the pink cloth `);
} else {
  console.log(`she should buy the blue cloth`);
}
console.log(bodySize);
// coding challeng #2 for array

// const calcTip = bill=> bill >=50 && bill <= 300? bill * 0.15 : bill * 0.20;
const calcTip = function (bill) {
  return (bill = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
};
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);
// // my practise Array;
// const friends = ["Micheal", "shola", "Tola"];
// const myBest = friends[0];
// console.log(myBest);

// const myBestFriend = function myBest() {
//   if (Micheal) return `he is my best friend`;
// };
// console.log(myBest);

// udemy homework
let country = "Nigeria";
let continent = "African";
let population = 10000000;
console.log(country);
console.log(continent);
console.log(population);

// first coding chanllenge
const markMass = 78;
const markHeight = 1.6;
const johnMass = 92;
const johnHeight = 1.9;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);
// boolean
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

const tola = `i have a car 🚙🚗`;
console.log(tola);
// coding chanllege 2
// const higherBMI = `Mark's BMI🦾is greater than John's BMI🦾`;
// console.log(higherBMI);

// let giveMass;
// if (markBMI > johnBMI) {
//   giveMass = `Mark's BMI${markBMI} 🦾is greater than John's BMI${johnBMI}🦾`;
// } else {
//   giveMass = `John's BMI${johnBMI} 🦾is greater than Mark's BMI${markBMI}🦾`;
// }
// console.log(giveMass);
// // codind chanllege 3
const dolphinsScore = 96 + 108 + 89;
const koalasScore = 88 + 91 + 110;
const averageDolphinScore = dolphinsScore / 3;
const averageKoalasScore = koalasScore / 3;
console.log(averageDolphinScore, averageKoalasScore);

const winner =
  averageDolphinScore > averageKoalasScore ||
  averageDolphinScore === averageKoalasScore;

if (averageDolphinScore > averageKoalasScore) {
  console.log(`Dolphin is the winner 🤩`);
} else if (averageKoalasScore > averageDolphinScore) {
  console.log(`koalas is the winner 😍`);
} else if (averageDolphinScore === averageKoalasScore) {
  console.log(`They are both the winner 😍`);
} else {
  console.log(`There is no winner 😣`);
}
// Bonus 1
const dolphinsScores = 97 + 112 + 101;
const koalasScores = 109 + 95 + 106;
if (dolphinsScores > koalasScores) {
  console.log(`Dolphins is the winner 😀`);
} else if (koalasScores > dolphinsScores) {
  console.log(`Koalas is the winner 😀`);
} else if (dolphinsScores >= 100 || koalasScores >= 100) {
  console.log(`They are both the winner 😀`);
} else {
  console.log(`Koalas is the winner`);
}

// coding challenge 4
// const bill = 275;
// const tip = bill <= 300 || bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip} and the total value is ${
//     bill + tip
//   }`
// );

// const billOne = 40;
// const tipSo = billOne <= 300 || billOne >= 50 ? billOne * 0.15 : billOne * 0.2;
// console.log(
//   `The bill was ${billOne}, the tip was ${tipSo} and the total value is ${
//     billOne + tipSo
//   } 🍽`
// );

// practise function decalartion
function beeWax(candlewax, petrolJelly) {
  const hairCream = `${candlewax} cup of candlewax mixed with ${petrolJelly} half cup of petrolJelly makes ten haircreams`;
  return hairCream;
}
const hairCream1 = beeWax;

console.log(hairCream1(3, 7));
const hairCream2 = beeWax;
console.log(hairCream2(10, 9));

// firstcoding chanlenge on function
const calcAverage = (a, b, c) => (a + b + c) / 3;
const dolphinScore = calcAverage(44, 23, 71);
const koalaScore = calcAverage(65, 54, 49);
console.log(dolphinScore, koalaScore);

function checkWinner(avgDolphins, avgKoalas) {
  if (dolphinScore >= 2 * koalaScore) {
    return `Dolphine wins the Trophy 🍷`;
  } else if (koalaScore >= 2 * dolphinScore) {
    return `Koalas wins the trophy 🍷`;
  } else if (koalaScore === dolphinScore) {
    return `They both wins the trophy`;
  } else return `No winner 😪`;
}
console.log(checkWinner(dolphinScore, koalaScore));

// coding chanllege 2
// const calctip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// Jonas has 3 friends, and his best friendsis called Micheal using dot notation
const jonas = {
  firstName: "Jonas",
  lastName: "Lukas",
  age: 2020 - 1987,
  job: "Teacher",
  friends: ["Peter", "Tola", "Micheal"],
};
console.log(
  `${jonas.firstName} has 3 friends ${jonas.friends}, and his best friends is called ${jonas.friends[2]}`
);

// coding challenge #3

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

// console.log(mark["calcBMI"]());

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
console.log(john.bmi, mark.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName} ${mark.lastName} BMI ${mark[
      "calcBMI"
    ]()} is higher than ${john.firstName} ${john.lastName} BMI ${john[
      "calcBMI"
    ]()}`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.firstName} ${john.lastName} BMI ${john[
      "calcBMI"
    ]()} is higher than ${mark.firstName} ${mark.lastName} BMI ${mark[
      "calcBMI"
    ]()}`
  );
}
// coding chanlleges #4

const calcTips = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTips(bills[i]));
  total.push(bills[i] + tips[i]);
}
console.log(bills, tips);
console.log(total);
// for(let i=0; i<bills.length; i++)
// 4. To get the average of total and it can evaluate any data you put
const calcAverages = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverages(total));
console.log(calcAverages(tips));

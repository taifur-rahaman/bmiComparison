// const markWeight = 78; // weight is in kilograms.
// const johnWeight = 92;

// const markHeight = 1.69; // height is in meters. 1 meter = 3.28 feet.
// const johnHeight = 1.95;

// // BMI calculation for Mark

// let markBMI = markWeight / Math.pow(markHeight, 2);
// console.log(markBMI);

// // BMI calculation for John

// let johnBMI = johnWeight / Math.pow(johnHeight, 2);
// console.log(johnBMI);

// if (markBMI > johnBMI) {
//   console.log("Mark's BMI is higher than John's.");
// } else if (markBMI < johnBMI) {
//   console.log("John's BMI is higher than Mark's.");
// }

const bmiBtn = document.getElementById("btn");
const result = document.getElementById("result");

let namePerson_1 = document.getElementById("name_one");
let weightPerson_1 = document.getElementById("weight_one");
let heightPerson_1 = document.getElementById("height_one");

let namePerson_2 = document.getElementById("name_two");
let weightPerson_2 = document.getElementById("weight_two");
let heightPerson_2 = document.getElementById("height_two");
bmiBtn.addEventListener("click", (e) => {
  let personOneBMI = weightPerson_1.value / Math.pow(heightPerson_1.value, 2);
  let personTwoBMI = weightPerson_2.value / Math.pow(heightPerson_2.value, 2);

  if (personOneBMI > personTwoBMI) {
    result.innerHTML = `BMI for ${namePerson_1.value}: ${personOneBMI.toFixed(
      2
    )} <br> BMI for ${namePerson_2.value}: ${personTwoBMI.toFixed(2)}
    <br>
    ${namePerson_1.value}'s BMI is higher than ${namePerson_2.value}'s.`;
  } else if (personOneBMI < personTwoBMI) {
    result.innerHTML = `BMI for ${namePerson_1.value}: ${personOneBMI.toFixed(
      2
    )} <br> BMI for ${namePerson_2.value}: ${personTwoBMI.toFixed(2)}
<br>
    ${namePerson_2.value}'s BMI is higher than ${namePerson_1.value}'s.`;
  } else {
    result.innerHTML = `BMI for ${namePerson_1.value}: ${personOneBMI.toFixed(
      2
    )} <br> BMI for ${namePerson_2.value}: ${personTwoBMI.toFixed(2)}
    <br>
    ${namePerson_1.value}'s and ${namePerson_2.value}'s BMIs are equal.`;
  }
});

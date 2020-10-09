// Date = built in method, js object.
// JS understands Time as a timestamp derived from Unix Time,
// which is a value consisting of a number of milisenconds that have passed
// since midnight on Januray 1st, 1970.

// new Date(year, month, day, hours, minutes, seconds, milliseconds)

// Date = returns a string;
const now = new Date();
// epochDate = Zero Time
const epochTime = new Date(0);

console.log("Raw information: \n" + now);
console.log("Original timestamp from 1970: " + epochTime);
console.log("Original timestamp nowadays: " + now.getTime());

// What month are we in?
const actual_month = new Date().getMonth();
const months = [
  "January", // Month 0
  "February", // Month 1
  "March", // Month 2
  "April", // Month 3
  "May", // Month 4
  "June", // Month 5
  "July", // Month 6
  "August", // Month 7
  "September", // Month 8
  "October", // Month 9
  "November", // Month 10
  "December", // Month 11
];
console.log(actual_month);
console.log("We are in " + months[actual_month]);

// Calculating my age
const my_b_day = new Date(2002, 9, 2); // My birth-date (months 0 - 11)
let today = new Date(); // Today's date
let age = 0;
if (my_b_day.getMonth() <= today.getMonth()) {
  // If my birth-month happened/is the current month:
  if (my_b_day.getDate() <= today.getDate()) {
    // If my birth-day happened/is the current day:
    age = today.getFullYear() - my_b_day.getFullYear();
    console.log(age);
  } else {
    // If is my birth-month but, my birth-day did not happen/is
    // the current:
    age = today.getFullYear() - my_b_day.getFullYear() - 1;
    console.log(age);
  }
} else {
  // If my birth-month haven't ocurred yet:
  age = today.getFullYear() - my_b_day.getFullYear() - 1;
  console.log(age);
}
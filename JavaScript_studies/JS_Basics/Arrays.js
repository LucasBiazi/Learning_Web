// Basics of Arrays
const my_name = ["Lucas", "de", "Biazi", "ferreira."];
// Print all the items.
let wholename = "";
for (let i = 0; i < my_name.length; i++) wholename += my_name[i] + " ";
console.log(wholename);

// Adding one more element and then sorting the array
const one_to_ten = [1, 9, 8, 5, 6, 3, 2, 7, 4];
one_to_ten.push(10);
// Note that we need to pass a function as well, since sort()
// compares the values in an alphabetically way.
// For that, we shall use an arrow funtion:
// We are requiring 2 values (a and b), and returning the
// result of its subtraction.

// if it returns a negative value, the value in a will be ordered before b.
// if it returns 0, the ordering of a and b won’t change.
// if it returns a positive value, the value in b will be ordered before a.

console.log(one_to_ten.sort((a, b) => a - b));
// For descending
console.log(one_to_ten.sort((a, b) => b - a));
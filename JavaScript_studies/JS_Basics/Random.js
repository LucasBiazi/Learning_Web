// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
// In other words, numbers betwenn 0 and 0.99999999999999999999999999999999999999999999999..........
console.log("This is a ramdon number: " + Math.random())

// Combined with Math.floor, we have random integers. Off course we need to put the coma/dot one spot left, (0.9 * 10 = 9).
// The following script shows random numbers between 1 and 9
console.log("Ramdon integer: " + Math.floor(Math.random() * 10))

//If we want between zero and 10:
console.log("Ramdon integer between 0 and 10: " + Math.floor(Math.random() * 11))

//If we want between one and 10:
console.log("Ramdon integer between 1 and 10: " + parseInt(Math.floor(Math.random() * 10) + 1))

//Now between one and 100
console.log("Ramdon integer between 1 and 100: " + parseInt(Math.floor(Math.random() * 110) + 1))

//Now let's say we want ramdon numbers between 50 and 72
function random_number() {
    return Math.floor(Math.random() * (72 - 50 + 1) + 50)
}
console.log("Ramdon number between 50 and 72: " + random_number())
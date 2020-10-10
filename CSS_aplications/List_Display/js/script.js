// Getting a random number among 0 - 10
function random_number() {
  return Math.floor(Math.random() * 10);
}

// Alternating among the properties of the object, based on a value (x)
function alternating(x) {
  switch (x) {
    case 0:
      return "name";
      break;

    case 1:
      return "age";
      break;
    case 2:
      return "quote";
      break;
    case 3:
      return "rn";
      break;

    default:
      return null;
      break;
  }
}

function fill_table() {
  // Getting access to 'table'
  const table = document.getElementById("table");
  // Declaring an object array, all values are fake.
  const database = [
    {
      name: "Lucas",
      age: 18,
      quote: "I'm studing Web Development!",
      rn: random_number(),
    },
    { name: "Mike", age: 25, quote: "Random.", rn: random_number() },
    { name: "Zephirus", age: 36, quote: "Funny words.", rn: random_number() },
    { name: "Todd", age: 55, quote: "I'm a magic man!", rn: random_number() },
    {
      name: "Nico",
      age: 65,
      quote: "Give me your weapon Mr. Jhon!",
      rn: random_number(),
    },
    {
      name: "Hermes",
      age: 85,
      quote: "Where's the restroom?",
      rn: random_number(),
    },
    {
      name: "Billy",
      age: 26,
      quote: "God why do I exist?",
      rn: random_number(),
    },
    { name: "Bob", age: 44, quote: "Life is a lie.", rn: random_number() },
    { name: "Jose", age: 54, quote: "404 not found", rn: random_number() },
    { name: "Axios", age: 51, quote: "NOT NULL", rn: random_number() },
    { name: "Chester", age: 41, quote: "MySQL is cool.", rn: random_number() },
    {
      name: "Luke",
      age: 60,
      quote: "I like to play alone.",
      rn: random_number(),
    },
  ];
  // Going through the array (executes 12 times)
  for (let i = 0; i < database.length; i++) {
    // Inserting a new row each time the loop is executed
    // We sum one because index(0) = header's row
    let row = table.insertRow(i + 1);
    // If the row is an odd one, paint its background
    if (i % 2 != 0) {
      row.className = "odd";
    }
    let cell;
    // Creates 4 cells, fill each cell with one property
    // of the object obtained in 'database' (executes 4 times)
    for (let x = 0; x < 4; x++) {
      cell = row.insertCell(x);
      // i = 0 - 11
      // x = 0 - 3
      // database (position [i], property [x])
      cell.innerHTML = database[i][alternating(x)];
    }
    // For each last cell of each row, we format its value display
    cell.className = "fourth_cell";
  }
}
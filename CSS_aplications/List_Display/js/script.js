function random_number() {
  return Math.floor(Math.random() * 10);
}

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
  const tabel = document.getElementById("table");
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
  for (let i = 0; i < database.length; i++) {
    let row = tabel.insertRow(i+1);
    for (let x = 0; x < 4; x++) {
      let cell = row.insertCell(x);
      cell.innerHTML = database[i][alternating(x)];
    }
  }
}

// Returns the day of the week in which the month starts.
function starting_day(year, month) {
  return new Date(year, month, 1).getDay();
}

// Returns the amount of days in a month.
function total_month_days(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

// Populates the DB.
function load_DB() {
  const table = document.getElementById("days");
  const date_object = new Date();
  // Array containing months names, starting_day()_+ total_month_days().
  const months = [
    {
      // Month 0
      month: "January",
      first_day: starting_day(date_object.getFullYear(), 0),
      days: Array(total_month_days(date_object.getFullYear(), 0)),
    },
    {
      // Month 1
      month: "February",
      first_day: starting_day(date_object.getFullYear(), 1),
      days: Array(total_month_days(date_object.getFullYear(), 1)),
    },
    {
      // Month 2
      month: "March",
      first_day: starting_day(date_object.getFullYear(), 2),
      days: Array(total_month_days(date_object.getFullYear(), 2)),
    },
    {
      // Month 3
      month: "April",
      first_day: starting_day(date_object.getFullYear(), 3),
      days: Array(total_month_days(date_object.getFullYear(), 3)),
    },
    {
      // Month 4
      month: "May",
      first_day: starting_day(date_object.getFullYear(), 4),
      days: Array(total_month_days(date_object.getFullYear(), 4)),
    },
    {
      // Month 5
      month: "June",
      first_day: starting_day(date_object.getFullYear(), 5),
      days: Array(total_month_days(date_object.getFullYear(), 5)),
    },
    {
      // Month 6
      month: "July",
      first_day: starting_day(date_object.getFullYear(), 6),
      days: Array(total_month_days(date_object.getFullYear(), 6)),
    },
    {
      // Month 7
      month: "August",
      first_day: starting_day(date_object.getFullYear(), 7),
      days: Array(total_month_days(date_object.getFullYear(), 7)),
    },
    {
      // Month 8
      month: "September",
      first_day: starting_day(date_object.getFullYear(), 8),
      days: Array(total_month_days(date_object.getFullYear(), 8)),
    },
    {
      // Month 9
      month: "October",
      first_day: starting_day(date_object.getFullYear(), 9),
      days: Array(total_month_days(date_object.getFullYear(), 9)),
    },
    {
      // Month 10
      month: "November",
      first_day: starting_day(date_object.getFullYear(), 10),
      days: Array(total_month_days(date_object.getFullYear(), 10)),
    },
    {
      // Month 11
      month: "December",
      first_day: starting_day(date_object.getFullYear(), 11),
      days: Array(total_month_days(date_object.getFullYear(), 11)),
    },
  ];

  // Prints the name of the current month.
  document.getElementById("month_title").textContent =
    months[date_object.getMonth()].month;

  // For the second row (first day row):
  const number_of_cells_in_the_first_row =
    7 - months[date_object.getMonth()].first_day;

  // Number of days to be displayed after the first row.
  let normal_days = number_of_cells_in_the_first_row + 1;

  // Populate rows.
  for (let r = 0; r < 5; r++) {
    let row = table.insertRow(r + 1);
    let cell;
    for (let x = 0; x < 7; x++) {
      cell = row.insertCell(x);
      cell.textContent = normal_days;
      normal_days++;
      // If we already populated all the days in the month.
      if (normal_days > months[date_object.getMonth()].days.length + 1) {
        cell.textContent = "";
        cell.className = "cancel_background";
      }
    }
  }

  // First row adjustment.
  for (let i = 0; i < 1; i++) {
    let row = table.insertRow(i + 1);
    let cell;
    let number_of_blank_cells = 7 - number_of_cells_in_the_first_row;
    // Creates the firs cells.
    for (let y = 0; y < number_of_cells_in_the_first_row; y++) {
      cell = row.insertCell(0);
      cell.textContent = number_of_cells_in_the_first_row - y;
    }
    // Clearing the others.
    for (let w = 0; w < number_of_blank_cells; w++) {
      cell = row.insertCell(0);
      cell.className = "cancel_background";
    }
  }
}

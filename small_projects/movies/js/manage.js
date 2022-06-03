//Useful variables
const movies = [];

const pop_up_message = (m) => {
  //If there's already a message, delete it
  if (document.getElementById("message") != null) {
    document.getElementById("message").remove();
  }
  //Construct the message
  const form = document.getElementById("main_form");
  const message = document.createElement("div");
  const content = document.createElement("p");
  message.classList.add("message");
  message.setAttribute("id", "message");
  content.classList.add("content");
  message.appendChild(content);
  form.appendChild(message);
  content.innerHTML = m;

  //Delete the message after x seconds
  vanish_message = () => {
    message.classList.add("vanish_message");
  };
  delete_message = () => {
    message.remove();
  };
  setTimeout(vanish_message, 4000);
  setTimeout(delete_message, 4300);
};

const register = () => {
  //Get values and register the new object
  const amount_of_movies = movies.length;
  let name = document.getElementById("name_input");
  let year = document.getElementById("year_input");
  let description = document.getElementById("description_input");

  //Making sure the inputs aren't blank
  if (name.value == "" || year.value == "" || description.value == "") {
    pop_up_message("Fill in all of the blanks!");
  } else {
    const movie = {
      name: name.value,
      year: year.value,
      description: description.value,
    };
    movies.push(movie);
    name.value = "";
    year.value = "";
    description.value = "";

    //Making sure the new movie was added
    if (movies.length > amount_of_movies) {
      pop_up_message("A new movie has been successfully registered!");
    } else {
      pop_up_message("Error, movie not registered!");
    }
  }
};

const clear_main = () => {
  if (document.getElementsByClassName("main_form").length >= 1) {
    document.getElementsByClassName("main_form")[0].remove();
  } else if (document.getElementsByClassName("movies_table").length >= 1) {
    document.getElementsByClassName("movies_table")[0].remove();
  }
};

const register_movie = () => {
  clear_main();

  //Creates the main Window
  //Creating the Elements
  const main = document.getElementById("main");
  const form = document.createElement("form");
  const name_label = document.createElement("label");
  const name_input = document.createElement("input");
  const year_label = document.createElement("label");
  const year_input = document.createElement("input");
  const description_label = document.createElement("label");
  const description_input = document.createElement("input");
  const register_button = document.createElement("button");

  //Tweaking Elements
  form.classList.add("main_form");
  form.setAttribute("onsubmit", "return false");
  form.setAttribute("id", "main_form");
  name_label.classList.add("labels");
  name_label.innerHTML = "Name";
  name_input.classList.add("inputs");
  name_input.setAttribute("id", "name_input");
  year_label.classList.add("labels");
  year_label.innerHTML = "Year";
  year_input.classList.add("inputs");
  year_input.setAttribute("id", "year_input");
  year_input.setAttribute("type", "number");
  description_label.classList.add("labels");
  description_label.innerHTML = "Description";
  description_input.classList.add("inputs");
  description_input.setAttribute("id", "description_input");
  register_button.innerHTML = "Register";
  register_button.classList.add("register_button");
  register_button.addEventListener("click", register);

  //Appending Elements
  main.appendChild(form);
  form.appendChild(name_label);
  form.appendChild(name_input);
  form.appendChild(year_label);
  form.appendChild(year_input);
  form.appendChild(description_label);
  form.appendChild(description_input);
  form.appendChild(register_button);
};

const list_movies = () => {
  clear_main();

  //Creates the table
  const main = document.getElementById("main");
  const table = document.createElement("table");
  const table_row = document.createElement("tr");
  const table_items_div = document.createElement("div");
  const name_header = document.createElement("th");
  const year_header = document.createElement("th");
  const info_div = document.createElement("div");
  const description = document.createElement("p");
  const search_input = document.createElement("input");

  //Adding the classes
  table_items_div.classList.add("test");
  table.classList.add("movies_table");
  name_header.classList.add("name_header");
  year_header.classList.add("year_header");
  table_row.classList.add("tr");
  description.classList.add("description");
  search_input.classList.add("inputs");
  search_input.setAttribute("id", "search_input");
  info_div.classList.add("info_div");

  //Apending children
  main.appendChild(table);
  table_items_div.appendChild(table_row);
  table_row.appendChild(name_header);
  table_row.appendChild(year_header);

  //Giving them values
  name_header.innerHTML = "Name";
  year_header.innerHTML = "Year";

  //Populating the table
  for (let i = 0; i < movies.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    td1.classList.add("td1");
    td2.classList.add("td2");
    td1.innerHTML = movies[i].name;
    td2.innerHTML = movies[i].year;

    table_items_div.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.addEventListener("mouseover", (e) => {
      let movie_name = e.target.parentNode.querySelector("td").innerHTML;
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].name === movie_name) {
          description.innerHTML = movies[i].description;
          break;
        }
      }
    });
  }
  table.appendChild(table_items_div);
  table.appendChild(info_div);
  info_div.appendChild(search_input);
  info_div.appendChild(description);
  search_movies();
};

const search_movies = () => {
  const search_input = document.getElementById("search_input");
  search_input.addEventListener("change", () => {
    const ordered_movies = [];
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].name === search_input.value) {
        ordered_movies.push(movies[i]);
      }
    }
    alert(ordered_movies.length + " movie(s) found with this name.");
  });
};

const load = () => {
  const register_movie_button = document.getElementById("register");
  const movie_list_button = document.getElementById("list");
  register_movie_button.addEventListener("click", register_movie);
  movie_list_button.addEventListener("click", list_movies);
};

document.addEventListener("DOMContentLoaded", () => {
  load();
});

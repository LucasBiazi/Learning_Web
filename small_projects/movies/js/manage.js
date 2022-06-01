//Useful variables
const movies = [];

const register = () => {
  const name = document.getElementById("name_input").value;
  const year = document.getElementById("year_input").value;
  const description = document.getElementById("description_input").value;
  const movie = {
    name: name,
    year: year,
    description: description,
  };
  movies.push(movie);
  console.log(movies);
};

const clear_main = () => {
  if (document.getElementsByClassName("main_form").length >= 1) {
    document.getElementsByClassName("main_form")[0].remove();
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
  year_input.setAttribute("type", "number");
  const description_label = document.createElement("label");
  const description_input = document.createElement("input");
  const register_button = document.createElement("button");

  //Tweaking Elements
  form.classList.add("main_form");
  form.setAttribute("onsubmit", "return false");
  name_label.classList.add("labels");
  name_label.innerHTML = "Name";
  name_input.classList.add("inputs");
  name_input.setAttribute("id", "name_input");
  year_label.classList.add("labels");
  year_label.innerHTML = "Year";
  year_input.classList.add("inputs");
  year_input.setAttribute("id", "year_input");
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
};

const load_buttons = () => {
  const register_movie_button = document.getElementById("register");
  const movie_list_button = document.getElementById("list");
  register_movie_button.addEventListener("click", register_movie);
  movie_list_button.addEventListener("click", list_movies);
};

document.addEventListener("DOMContentLoaded", () => {
  load_buttons();
});

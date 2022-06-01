const register_movie = () => {
  //Create Elements
  const main = document.getElementById("main");
  const form = document.createElement("form");
  const name_label = document.createElement("label");
  const name_input = document.createElement("input");
  const year_label = document.createElement("label");
  const year_input = document.createElement("input");
  const description_label = document.createElement("label");
  const description_input = document.createElement("input");

  //Tweaking Elements
  form.classList.add("main_form");

  //Appending Elements
  main.appendChild(form);
  form.appendChild(
    name_label,
    name_input,
    year_label,
    year_input,
    description_label,
    description_input
  );
};

const load_buttons = () => {
  const register_movie_button = document.getElementById("register");
  const movie_list_button = document.getElementById("list");
  register_movie_button.addEventListener("click", register_movie);
};

document.addEventListener("DOMContentLoaded", () => {
  load_buttons();
});

const load_buttons = () => {
  const manage_movies_button = document.getElementById("manage");
  const movie_list_button = document.getElementById("list");
  manage_movies_button.addEventListener("click");
  movie_list_button.addEventListener("click");
};

document.addEventListener("DOMContentLoaded", () => {
  load_buttons();
});

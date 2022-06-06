const start_game = () => {
  const greet_div = document.getElementById("greet_div");
  greet_div.remove();
};

const greet_player = () => {
  //Create elements
  const body = document.getElementById("body");
  const greet_div = document.createElement("div");
  const how_to_play_div = document.createElement("div");
  const how_to_play_label = document.createElement("label");
  const how_to_play = document.createElement("p");
  const choose_div = document.createElement("div");
  const choose_label = document.createElement("label");
  const div_buttons = document.createElement("div");
  const div_X = document.createElement("div");
  const div_O = document.createElement("div");

  //Adding classes
  greet_div.classList.add("greet_div");
  how_to_play_div.classList.add("how_to_play_div");
  choose_div.classList.add("choose_div");
  how_to_play_label.classList.add("how_to_play_label");
  choose_label.classList.add("choose_label");
  div_buttons.classList.add("div_buttons");
  div_O.classList.add("div_O");
  div_X.classList.add("div_X");

  //Appending Children
  body.appendChild(greet_div);
  greet_div.appendChild(how_to_play_div);
  greet_div.appendChild(choose_div);
  how_to_play_div.appendChild(how_to_play_label);
  how_to_play_div.appendChild(how_to_play);
  choose_div.appendChild(choose_label);
  choose_div.appendChild(div_buttons);
  div_buttons.appendChild(div_O);
  div_buttons.appendChild(div_X);

  //Giving them values
  greet_div.setAttribute("id", "greet_div");
  how_to_play_label.innerHTML = "How to play Tic-Tac-Toe";
  how_to_play.innerHTML =
    "To win in Tic Tac Toe you must form an uninterrupted row with the chosen symbol. You can play with either the X's or O's.";
  choose_label.innerHTML = "Choose your symbol";

  //Buttons' events
  div_O.addEventListener("click", start_game);
  div_X.addEventListener("click", start_game);
};

document.addEventListener("DOMContentLoaded", () => {
  greet_player();
});

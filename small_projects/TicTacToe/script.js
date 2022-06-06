const start_game = (e) => {
  //Remove Greet
  const chosen_symbol = e.target.innerHTML;
  const greet_div = document.getElementById("greet_div");
  const delete_greet = () => greet_div.remove();
  greet_div.classList.add("fade");
  setTimeout(delete_greet, 300);

  const play = (e) => {
    const chosen_position = e.target;
    if (chosen_position.innerHTML == "") {
      chosen_position.innerHTML = chosen_symbol;
    }
  };

  //Set table
  const a1 = document.getElementById("a1");
  const a2 = document.getElementById("a2");
  const a3 = document.getElementById("a3");
  const b1 = document.getElementById("b1");
  const b2 = document.getElementById("b2");
  const b3 = document.getElementById("b3");
  const c1 = document.getElementById("c1");
  const c2 = document.getElementById("c2");
  const c3 = document.getElementById("c3");
  a1.addEventListener("click", play);
  a2.addEventListener("click", play);
  a3.addEventListener("click", play);
  b1.addEventListener("click", play);
  b2.addEventListener("click", play);
  b3.addEventListener("click", play);
  c1.addEventListener("click", play);
  c2.addEventListener("click", play);
  c3.addEventListener("click", play);
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
  how_to_play.classList.add("how_to_play");
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
  div_X.innerHTML = "X";
  div_O.innerHTML = "O";
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

const announce_winner = (winner) => {
  //Builds the announcement screen
  const body = document.getElementById("body");
  const winner_div = document.createElement("div");
  const p_winner = document.createElement("p");

  //Adds classes
  winner_div.classList.add("winner_div");

  //Appending Children
  body.appendChild(winner_div);
  winner_div.appendChild(p_winner);

  //Giving them values
  p_winner.innerHTML = winner + " is the winner.";
};

const start_game = (e) => {
  //Set game variables
  let chosen_symbol = e.target.innerHTML;
  let unchosen_symbol;
  const game_mode = document.getElementById("game_mode").value;
  if (chosen_symbol === "X") unchosen_symbol = "O";
  else unchosen_symbol = "X";

  //Remove Greeting
  const greet_div = document.getElementById("greet_div");
  greet_div.remove();

  //Single Player
  if (game_mode === "single_player") {
    const play = (e) => {
      const chosen_position = e.target;
      if (chosen_position.innerHTML == "") {
        chosen_position.innerHTML = chosen_symbol;
        [chosen_symbol, unchosen_symbol] = [unchosen_symbol, chosen_symbol];
      }
      // Checks for winner
      let current_table = [
        a1.innerHTML,
        a2.innerHTML,
        a3.innerHTML,
        b1.innerHTML,
        b2.innerHTML,
        b3.innerHTML,
        c1.innerHTML,
        c2.innerHTML,
        c3.innerHTML,
      ];
      let horizontal = 0;
      let vertical = 0;
      for (let u = 0; u < 3; u++) {
        //Checks for horizontal win
        if (
          current_table[horizontal] === current_table[horizontal + 1] &&
          current_table[horizontal + 1] === current_table[horizontal + 2] &&
          current_table[horizontal] != ""
        ) {
          announce_winner(current_table[horizontal]);
          break;
        }
        horizontal = horizontal + 3;
        //Checks for vertical win
        if (
          current_table[vertical] === current_table[vertical + 3] &&
          current_table[vertical + 3] === current_table[vertical + 6] &&
          current_table[vertical] != ""
        ) {
          announce_winner(current_table[vertical]);
          break;
        }
        vertical = vertical + 1;
        //Checks for perpendicular win
        if (
          current_table[0] === current_table[4] &&
          current_table[4] === current_table[8] &&
          current_table[0] != ""
        ) {
          announce_winner(current_table[4]);
          break;
        }
        if (
          current_table[2] === current_table[4] &&
          current_table[4] === current_table[6] &&
          current_table[2] != ""
        ) {
          announce_winner(current_table[4]);
          break;
        }
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
  }

  //Against the computer
  else {
  }
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
  const mode_div = document.createElement("div");
  const mode_label = document.createElement("label");
  const select_mode = document.createElement("select");
  const opt1 = document.createElement("option");
  const opt2 = document.createElement("option");

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
  mode_div.classList.add("mode_div");

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
  choose_div.appendChild(mode_div);
  mode_div.appendChild(mode_label);
  mode_div.appendChild(select_mode);
  select_mode.appendChild(opt1);
  select_mode.appendChild(opt2);

  //Giving them values
  greet_div.setAttribute("id", "greet_div");
  how_to_play_label.innerHTML = "How to play Tic-Tac-Toe";
  how_to_play.innerHTML =
    "To win in Tic Tac Toe you must form an uninterrupted row with the chosen symbol. You can play with either the X's or O's.";
  choose_label.innerHTML = "Choose your symbol";
  div_X.innerHTML = "X";
  div_O.innerHTML = "O";
  mode_label.innerHTML = "Choose a gamemode";
  select_mode.setAttribute("id", "game_mode");
  opt1.setAttribute("value", "single_player");
  opt1.innerHTML = "Single Player";
  opt2.setAttribute("value", "against_machine");
  opt2.innerHTML = "Against The Computer";

  //Buttons' events
  div_O.addEventListener("click", start_game);
  div_X.addEventListener("click", start_game);
};

document.addEventListener("DOMContentLoaded", () => {
  greet_player();
});

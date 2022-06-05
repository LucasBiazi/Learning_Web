const greet_player = () => {
  //Create elements
  const greet_div = document.createElement("div");
  const how_to_play_div = document.createElement("div");
  const how_to_play_label = document.createElement("label");
  const how_to_play = document.createElement("p");
  const choose_div = document.createElement("div");
  const choose_label = document.createElement("label");
  const div_X = document.createElement("div");
  const div_O = document.createElement("div");

  //Adding classes
  greet_div.classList.add("greet_div");

  //Appending Children
  greet_div.appendChild(how_to_play_div);
  greet_div.appendChild(choose_div);
  how_to_play_div.appendChild(how_to_play_label);
  how_to_play_div.appendChild(how_to_play);
  choose_div.appendChild(choose_label);
  choose_div.appendChild(div_X);
  choose_div.appendChild(div_O);
};

document.addEventListener("DOMContentLoaded", () => {
  greet_player();
});

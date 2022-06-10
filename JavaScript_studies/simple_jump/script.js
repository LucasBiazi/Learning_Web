const start = () => {
  const character = document.getElementById("character");
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      if (character.classList.value === "character") {
        character.classList.add("character_animated");
      }
      setTimeout(() => {
        character.classList.remove("character_animated");
      }, 600);
    }
  });
};

const check_if_dead = () => {
  setInterval(() => {
    let character_position = document
      .getElementById("character")
      .getBoundingClientRect();
    let enemy_position = document
      .getElementById("enemy")
      .getBoundingClientRect();
    if (character_position.y === 485 && enemy_position.x < 415)
      document.getElementById("warning").innerHTML =
        "You lost! Push the F5 key to restart!";
  }, 10);
};

document.addEventListener("DOMContentLoaded", () => {
  start();
  check_if_dead();
});

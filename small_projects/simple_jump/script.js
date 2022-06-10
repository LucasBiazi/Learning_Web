const start = () => {
  const character = document.getElementById("character");
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      character.classList.add("character_animated");
      setTimeout(() => {
        character.classList.remove("character_animated");
      }, 600);
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  start();
});

const shoot = (x) => {
  //Creates bullet
  const main = document.getElementById("main");
  const div_bullet = document.createElement("div");

  //Appends child
  main.appendChild(div_bullet);

  //Sets position
  div_bullet.style.top = "340px";
  div_bullet.style.left = x + "px";

  //Gives it a class
  div_bullet.classList.add("div_bullet");
  
  //Deletes bullet
  setTimeout(() => {
    div_bullet.remove();
  }, 1000);
};

const load_game = () => {
  //Adding movement to the spaceship
  const space_ship = document.getElementById("space_ship");
  let x = 375;
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        if (x <= 15) break;
        x = x - 10;
        space_ship.style.left = x + "px";
        break;
      case "ArrowRight":
        if (x >= 725) break;
        x = x + 10;
        space_ship.style.left = x + "px";
        break;
      case "ArrowUp":
        if (document.getElementsByClassName("div_bullet").length === 0)
          shoot(x + 20);
        break;
      default:
        break;
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  load_game();
});

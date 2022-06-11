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
          
        break;
      default:
        break;
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  load_game();
});

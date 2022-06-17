const shoot = (top, x) => {
  //Creates bullet
  const main = document.getElementById("main");
  const div_bullet = document.createElement("div");

  //Appends child
  main.appendChild(div_bullet);

  //Sets position
  div_bullet.style.top = top + "px";
  div_bullet.style.left = x + "px";

  //Gives it a class
  div_bullet.classList.add("div_bullet");
  div_bullet.setAttribute("id", "bullet");

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
          shoot(340, x + 20);
        break;
      default:
        break;
    }
  });
};

const collision_system = () => {
  const check_collision = (rec_a, rec_b) => {
    return (
      rec_a.x < rec_b.x + rec_b.width &&
      rec_a.x + rec_a.width > rec_b.x &&
      rec_a.y < rec_b.y + rec_b.height &&
      rec_a.height + rec_a.y > rec_b.y
    );
  };
  setInterval(() => {
    //Checks if any enemy was hit
    const e0 = document.getElementById("e0");
    const e1 = document.getElementById("e1");
    const e2 = document.getElementById("e2");
    const e3 = document.getElementById("e3");
    const e4 = document.getElementById("e4");

    const enemies_position = [e0, e1, e2, e3, e4];
    const enemies = document.getElementById("enemies");

    //Checks for barrier collision
    const b0 = document.getElementById("b0");
    const b1 = document.getElementById("b1");
    const b2 = document.getElementById("b2");
    const b3 = document.getElementById("b3");
    const barriers_position = [b0, b1, b2, b3];

    //If there is a bullet in-game
    if (document.getElementById("bullet")) {
      const bullet = document.getElementById("bullet").getBoundingClientRect();

      for (let i = 0; i < 5; i++) {
        if (
          check_collision(enemies_position[i].getBoundingClientRect(), bullet)
        ) {
          enemies.removeChild(enemies.lastChild);
          setTimeout(() => document.getElementById("bullet").remove(), 10);
        }
        if (i < 4) {
          if (
            check_collision(
              barriers_position[i].getBoundingClientRect(),
              bullet
            )
          ) {
            //Takes barrier
            barriers_position[i].style.opacity = 0;
            document.getElementById("bullet").remove();
          }
        }
      }
    }
  }, 10);
};

document.addEventListener("DOMContentLoaded", () => {
  load_game();
  collision_system();
});

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
          shoot(x + 20);
        break;
      default:
        break;
    }
  });
};

const collision_system = () => {
  setInterval(() => {
    //Checks if any enemy was hit
    const e1 = document.getElementById("e1");
    const e2 = document.getElementById("e2");
    const e3 = document.getElementById("e3");
    const e4 = document.getElementById("e4");
    const e5 = document.getElementById("e5");

    const enemies_position = [
      { x: e1.getBoundingClientRect().x, y: e1.getBoundingClientRect().y },
      { x: e2.getBoundingClientRect().x, y: e2.getBoundingClientRect().y },
      { x: e3.getBoundingClientRect().x, y: e3.getBoundingClientRect().y },
      { x: e4.getBoundingClientRect().x, y: e4.getBoundingClientRect().y },
      { x: e5.getBoundingClientRect().x, y: e5.getBoundingClientRect().y },
    ];

    if (document.getElementById("bullet")) {
      const x_bullet = document
        .getElementById("bullet")
        .getBoundingClientRect().x;
      const y_bullet = document
        .getElementById("bullet")
        .getBoundingClientRect().y;

      console.log(
        "X: " + enemies_position[0].x + "Y: " + enemies_position[0].y
      );
      console.log("X bullet: " + x_bullet + "Y bullet : " + y_bullet);
      for (let i = 0; i < 5; i++) {
        if (
          enemies_position[i].x === x_bullet &&
          enemies_position[i].y === y_bullet
        )
          alert("Shoot!");
      }
    }
  }, 10);
};

document.addEventListener("DOMContentLoaded", () => {
  load_game();
  collision_system();
});

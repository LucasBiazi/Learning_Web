const load = () => {
  const square = document.getElementById("square");
  let x = 0;
  let y = 0;
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowRight":
        x += 10;
        square.style.marginRight = x;
        break;
      case "ArrowLeft":
        x += -10;
        square.style.marginLeft = x;
        break;
      case "ArrowDown":
        y += -10;
        square.style.marginTop = y;
        break;
      case "ArrowUp":
        y += 10;
        square.style.marginBottom = y;
        break;
    }
    console.log("X: " + x);
    console.log("Y: " + y);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  load();
});

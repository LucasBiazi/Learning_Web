const load = () => {
  const square = document.getElementById("square");
  let x = 0;
  let y = 0;
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowRight":
        x = x + 10;
        square.style.marginLeft = x + "px";
        break;
      case "ArrowLeft":
        x = x - 10;
        square.style.marginLeft = x + "px";
        break;
      case "ArrowDown":
        y = y + 10;
        square.style.marginTop = y + "px";
        break;
      case "ArrowUp":
        y = y - 10;
        square.style.marginTop = y + "px";
        break;
    }
    console.log("X: " + x);
    console.log("Y: " + y);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  load();
});

document.addEventListener("DOMContentLoaded", () => {
  const ball = document.getElementById("ball");
  const upArrow = document.getElementById("up");
  const leftArrow = document.getElementById("left");
  const rightArrow = document.getElementById("right");
  const downArrow = document.getElementById("down");

  const MOVE_BY = 15;

  function moveBall(direction) {
    let currentLeft = parseInt(ball.style.left) || 0;
    let currentTop = parseInt(ball.style.top) || 0;

    switch (direction) {
      case "up":
        ball.style.top = currentTop - MOVE_BY + "px";
        break;
      case "down":
        ball.style.top = currentTop + MOVE_BY + "px";
        break;
      case "left":
        ball.style.left = currentLeft - MOVE_BY + "px";
        break;
      case "right":
        ball.style.left = currentLeft + MOVE_BY + "px";
        break;
    }
  }

  upArrow.addEventListener("click", () => moveBall("up"));
  downArrow.addEventListener("click", () => moveBall("down"));
  leftArrow.addEventListener("click", () => moveBall("left"));
  rightArrow.addEventListener("click", () => moveBall("right"));
});

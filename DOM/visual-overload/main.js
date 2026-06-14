function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");

  for (let i = 0; i < 12; i++) {
    const box = document.createElement("div");
    box.classList.add("box");

    box.addEventListener("mouseenter", function () {
      this.style.backgroundColor = getRandomColor();
    });
    container.appendChild(box);
  }
});

const posts = [
  { name: "Bob", text: "Hello world! This is my first post." },
  { name: "Ted", text: "Hey everyone, learning MVC today!" },
];

function render() {
  const postsContainer = document.getElementById("postsContainer");

  postsContainer.innerHTML = "";
  posts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.style.borderBottom = "1px solid #ccc";
    postDiv.style.padding = "10px 0";

    const authorPara = document.createElement("strong");
    authorPara.textContent = `${post.name}: `;

    const textSpan = document.createElement("span");
    textSpan.textContent = post.text;

    postDiv.appendChild(authorPara);
    postDiv.appendChild(textSpan);
    postsContainer.appendChild(postDiv);
  });
}

function handleAddPost() {
  const nameInput = document.getElementById("nameInput");
  const textInput = document.getElementById("textInput");

  const nameValue = nameInput.value.trim();
  const textValue = textInput.value.trim();

  if (nameValue === "" || textValue === "") {
    alert("Please fill in both the name and text fields.");
    return;
  }

  posts.push({
    name: nameValue,
    text: textValue,
  });
  render();

  nameInput.value = "";
  textInput.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  render();

  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", handleAddPost);
});

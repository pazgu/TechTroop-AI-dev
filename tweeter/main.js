const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

const postButton = document.getElementById("post-button");
postButton.addEventListener("click", function () {
  const input = document.getElementById("post-input");
  if (input.value) {
    tweeter.addPost(input.value);
    input.value = "";
    renderer.renderPosts(tweeter.getPosts());
  }
});

const postsContainer = document.getElementById("posts");

postsContainer.addEventListener("click", function (event) {
  const postElement = event.target.closest(".post");
  if (!postElement) return;

  const postID = postElement.getAttribute("data-id");

  if (event.target.classList.contains("delete")) {
    tweeter.removePost(postID);
    renderer.renderPosts(tweeter.getPosts());
  } else if (event.target.classList.contains("comment-button")) {
    const inputField = event.target.previousElementSibling;
    if (inputField && inputField.value) {
      tweeter.addComment(postID, inputField.value);
      renderer.renderPosts(tweeter.getPosts());
    }
  } else if (event.target.classList.contains("delete-comment")) {
    const commentID = event.target.getAttribute("data-id");
    tweeter.removeComment(postID, commentID);
    renderer.renderPosts(tweeter.getPosts());
  }
});

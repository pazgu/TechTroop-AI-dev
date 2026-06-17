const Renderer = function () {
  const createCommentHTML = function (comment) {
    return `
            <div class="comment" data-id="${comment.id}">
                <span class="delete-comment" data-id="${comment.id}">X</span>
                ${comment.text}
            </div>
        `;
  };

  const createPostElement = function (post) {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.setAttribute("data-id", post.id);

    let commentsHTML = "";
    for (let comment of post.comments) {
      commentsHTML += createCommentHTML(comment);
    }

    postElement.innerHTML = `
            <div class="post-text">${post.text}</div>
            <div class="delete" data-id="${post.id}">Delete Post</div>
            <div class="comments">
                ${commentsHTML}
            </div>
            <input type="text" placeholder="Got something to say?" class="comment-input">
            <button class="comment-button">Comment</button>
        `;

    return postElement;
  };

  const renderPosts = function (posts) {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";

    for (let post of posts) {
      const postElement = createPostElement(post);
      postsContainer.appendChild(postElement);
    }
  };

  return {
    renderPosts,
  };
};

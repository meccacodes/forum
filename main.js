const post = document.getElementById("submit");
const user = document.getElementById("name");
const message = document.getElementById("message");
const postBox = document.querySelector(".posts");

const listenForPost = post.addEventListener("click", function () {
  const userName = user.value;
  const userMessage = message.value;
  const userPostContainer = document.createElement("div");
  const userPost = `<h4>${userName}</h4><p>${userMessage}<p>`;
  userPostContainer.innerHTML = userPost;
  postBox.insertAdjacentElement("afterbegin", userPostContainer);
});

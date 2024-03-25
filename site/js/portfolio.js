const avatar = document.querySelector("#avatar");

avatar.addEventListener("click", () => {
  if (avatar.src.endsWith("avatar.svg")) {
    avatar.src = "image/avatar-bis.png";
  } else {
    avatar.src = "image/avatar.svg";
  }
});

const promptBtn = document.querySelector("#promptBtn");
const firstName = document.querySelector("#firstname");

promptBtn.addEventListener("click", () => {
  firstName.innerText = prompt("Enter your name :");
  firstName.style.color = "white";
});

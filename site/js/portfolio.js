const firstBanner = document.getElementsByClassName('firstBanner');
const changeAvatar = document.getElementById('changeAvatar');

changeAvatar.addEventListener("click", function () {
    changeAvatar.src = "image/avatar.svg";
})

const firstName = document.getElementById('firstname');
let askName = prompt("Enter your name");
firstName.innerHTML = askName;
firstName.style.color = "white";

const pinkBg = document.getElementsByClassName('.description pink-bg.pink-text')
let askColor = prompt("Enter your color");
pinkBg.style.backgroundColor = askColor; 
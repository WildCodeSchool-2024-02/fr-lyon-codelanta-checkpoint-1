
// Step 1
const firstBanner = document.getElementsByClassName('firstBanner');
const changeAvatar = document.getElementById('changeAvatar');

changeAvatar.addEventListener("click", function () {
    changeAvatar.src = "image/avatar.svg";
})

// Step 2 and 3 
const firstName = document.getElementById('firstname');
let askName = prompt("Enter your name");
firstName.innerHTML = askName;
firstName.style.color = "white";

// Step 4 not working but tried
const pinkBg = document.querySelectorAll('.description pink-bg,.pink-text')
let askColor = prompt("Enter your color");
pinkBg.style.backgroundColor = askColor;

// Step 5 not working but tried
const changeA = document.getElementsByTagName('a');
for (let i = 0; i < a.length; i++) {
    changeA.style.color = askColor;
}

// Step 6 not working but tried
const button = document.getElementsByTagName("button");
const list = document.getElementsByTagName("li");

button.adEventListener("click", function () {
    list.innerText = "aaaaaaa";
})





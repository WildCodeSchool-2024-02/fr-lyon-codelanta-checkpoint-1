const avatar = document.getElementById("avatar");
avatar.addEventListener(('click'), () => {
    avatar.src = "image/avatar.svg"
    avatar.addEventListener(('click'), () => {
   // avatar.src = "image/avatar-bis.png"
   return location.reload()
}
    )})
//eturn location.reload()})


const Matt = document.getElementById("Matt");
const button = document.createElement("button");
const fistName = document.getElementById("firstname")
button.innerText = "Modify text and color"
button.classList.add("textChange")
Matt.appendChild(button)

button.addEventListener(('click'), () => {
    let colorBox = window.prompt("Enter a color")
    let prompt = window.prompt("Enter your Name")
    let pinkText = document.getElementsByClassName("pink-text");
    let pinkBg = document.getElementsByClassName("pink-bg");
    //pinkText = pinkText.concat(pinkBg)
fistName.innerText = prompt



Matt.classList.remove("pink-bg")
fistName.style.color = "white";
Matt.style.backgroundColor = colorBox;

for (let i = 0; i < pinkText.length; i++) {
    pinkText[i].style.color = colorBox};
for (let i = 0; i < pinkBg.length; i++) {
        pinkBg[i].style.backgroundColor = colorBox};

//pink.style.backgroundColor = colorBox;


})

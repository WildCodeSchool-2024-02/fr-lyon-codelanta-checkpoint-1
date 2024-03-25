const buttonFullstack = document.getElementsByClassName("fullstack");
const imgAvatar = document.getElementsByClassName("avatar1");

buttonFullstack.addEventListener("click", function() {
    imgAvatar.src = "/site/image/avatar-bis.png";
});


function modifyName(){
    let newName = prompt("Enter your Name");
    document.getElementById("firstname").innerText = newName;
    document.getElementById("firstname").style.color = "white";
    let backColor = prompt("Enter a color");
    document.getElementById("pink-bg").style.backgroundColor = backColor;
    document.querySelectorAll(".pink-text").style.color = backColor;
}
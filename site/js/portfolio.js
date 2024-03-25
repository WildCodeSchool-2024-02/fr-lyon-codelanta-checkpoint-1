

const avatar=document.getElementById("avatar");
const firstName=document.getElementById("firstname");
const pinkElement=document.getElementById("pink-text");
const pinkBG=document.getElementsByClassName("pink-bg");
const newAvatar=document.createElement("img");

firstName.addEventListener("click", () => {
    firstName.style.color="white";
});

avatar.addEventListener("click", () => {
    avatar.appendChild(newAvatar)

});

pinkElement.addEventListener("click", () => {
    pinkElement.style.color= "#750ff7";
});

pinkBG.addEventListener("click", () => {
    pinkBG.style.background= "#750ff7";
});






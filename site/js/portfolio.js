const avatar = document.getElementById('avatar');
const buttonModify = document.getElementById('textModify')
const firstname = document.getElementById('firstname')
const pinkBackground = document.getElementsByClassName('pink-bg');
const pinkText = document.getElementsByClassName('pink-text');
const aBlack = document.getElementsByTagName('a');
const frontSkills = document.getElementById('front-dev-tools');
const frontButton = document.getElementById('modifyFront');
const frontTools = frontSkills.getElementsByTagName('li')
const backButton = document.getElementById("modifyBack");
const backAdding = document.getElementById("addingBack");
const backSkills = document.getElementById('back-dev-tools');
// const backTools = backSkills.getElementsByTagName('li');

/* ---------------- Changement d'Avatar --------------- */

avatar.addEventListener('click', () => {
    // if(avatar.src === "image/avatar.svg"){
        avatar.src = "image/avatar_lion.jpg";
    // }
    // else if(avatar.src === "image/avatar_lion.jpg"){
    //     avatar.src = "image/avatar.svg";
    // }
})


/* ------------------ Replacing text -------------- */

buttonModify.addEventListener('click', () => {

    let purple = prompt('What color do you want ?');
    for (let pinkBG of pinkBackground){
        pinkBG.style.background = purple;
    }
    for (let pinkTXT of pinkText){
        pinkTXT.style.color = purple;
    }
    for (let aPurple of aBlack){
        aPurple.style.color = purple;
    }
    firstname.textContent = prompt('Enter your name');
    firstname.style.color = "white";

})

frontButton.addEventListener('click', () => {
    frontTools[0].textContent = "VSCode";
    frontTools[1].textContent = "GitHub";
    frontTools[2].textContent = "Terminal";
})

backButton.addEventListener('click', () => {
    let newTool = document.createElement("li")
    let backAddingvalue = backAdding.value;
    console.log(backAddingvalue);
    newTool.innerHTML = backAdding.value;
    backSkills.appendChild(newTool);


})
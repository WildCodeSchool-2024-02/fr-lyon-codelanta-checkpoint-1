const avatar = document.querySelector('img');
const ebuttonName = document.getElementById('buttonName');
const efirstname = document.getElementById('firstname');
const ebgColor = document.getElementsByClassName('pink-bg')[0];
const allcolor = document.querySelectorAll('.pink-bg');
const linka = document.querySelectorAll('a');



avatar.addEventListener("click", function() {
    avatar.src = "./image/avatar-bis.png";
});

ebuttonName.addEventListener("click", function() {
    const yourname = prompt("what is your name ? ");
    const color = prompt("what color ? ");
    // const color = prompt("what color ? ");
    efirstname.textContent = yourname;
    // ebgColor.style.backgroundColor = color;
    allcolor.forEach(colors => {
    colors.style.backgroundColor = color;
    });

    linka.forEach(acolor => {
        acolor.style.color = color;
    });

});

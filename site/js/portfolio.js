const avatar = document.querySelector('img');
const ebuttonName = document.getElementById('buttonName');
const efirstname = document.getElementById('firstname');
const ebgColor = document.getElementsByClassName('pink-bg')[0];
const allcolor = document.querySelectorAll('.pink-bg');
const linka = document.querySelectorAll('a');
const edevtools = document.getElementById('devtools');
const etext1 = document.getElementById('text1');
const etext2 = document.getElementById('text2');
const etext3 = document.getElementById('text3');
const toolsUl= document.getElementById('front-dev-tools');




avatar.addEventListener("click", function() {
    avatar.src = "../image/avatar-bis.png";
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


edevtools.addEventListener("click", function() {
    etext1.textContent = "lorem ipsilum 1";
    etext2.textContent = "lorem ipsilum 2";
    etext3.textContent = "lorem ipsilum 3";
    const add = prompt("What else ?");
    const newli = document.createElement("li");
    newli.textContent = add;
    toolsUl.appendChild(newli)
});

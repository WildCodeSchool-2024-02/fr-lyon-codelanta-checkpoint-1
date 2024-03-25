let avatar = document.getElementById("changeAvatar");

function changeAvatar() {

    avatar.addEventListener("click", (event) => {
        event.preventDefault();
        avatar.attributes.img === "image/avatar.svg";

    })
}
changeAvatar()


let dname = document.getElementById("firstname");
let baliseButton = document.getElementById("myButton")

function changeName() {

    baliseButton.addEventListener("click", (event) => {
        event.preventDefault();
        let newName = prompt("Comment t'appelles-tu ?");
        dname.innerText = newName;
        dname.style.color = "white";
    });
}
changeName();
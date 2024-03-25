function newAvatar() {
    document.getElementById("avatar").src = "./image/avatar.svg"
}

const section = document.getElementById("firstname");

function changeName() {
    const button = document.createElement("button");
    button.classList.add("change name button");
    button.textContent = "Modify text and color";

}


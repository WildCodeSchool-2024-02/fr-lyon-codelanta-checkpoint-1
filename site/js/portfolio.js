document.addEventListener("DOMContentLoaded", function () {
	let avatar = document.getElementById("avatarImage");
	let avatarState = false;

	avatar.addEventListener("click", function () {
		if (avatarState) {
			avatar.src = "../image/avatar.svg";
		} else {
			avatar.src = "../image/avatar-bis.png";
		}
		avatarState = !avatarState;
	});

	let Btn = document.getElementById("Btn");

	Btn.addEventListener("click", function () {
		let newName = prompt("Please enter your name:", "");

		if (newName !== null && newName !== "") {
			let changeColor = document.getElementById("firstname");

			changeColor.textContent = newName;
			changeColor.style.color = "white";
		}
	});
});

function changeAvatar() {
const avatar = document.querySelector(`.avatar`);
avatar.src = 'image/avatar.svg';
}
const modify = document.getElementById('modify');


modify.addEventListener("click", function () {
  const name = document.getElementById('firstname');
  const bg = document.querySelector('.description')
  name.textContent = prompt('change your name')
  const newColor = prompt('Enter the new background color');
            if (newColor !== null) {
                bg.style.backgroundColor = newColor
            }
});

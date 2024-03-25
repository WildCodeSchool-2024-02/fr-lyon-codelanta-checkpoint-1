document.addEventListener('DOMContentLoaded', function() {
    let avatar = document.getElementById('avatarImage');
    let avatarState = false;

    avatar.addEventListener('click', function() {
        if (avatarState) {
            avatar.src = '../image/avatar.svg';
        } else {
            avatar.src = '../image/avatar-bis.png';
        }
        avatarState = !avatarState;
    });
});

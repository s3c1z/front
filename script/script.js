let email = document.querySelector('#email');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

let users = {};

function User(email, password) {
    this.email = email;
    this.password = password;
}

function createId(users) {
    return Object.keys(users).length;
}

submit.addEventListener('click', () => {
    const emailUser = email.value;
    const passwordUser = password.value;

    const user = new User(emailUser, passwordUser);

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);
});

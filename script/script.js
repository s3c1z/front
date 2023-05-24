let username = document.querySelector('#username');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

let users = {};

function User(username, password) {
    this.username = username;
    this.password = password;
}

function createId(users) {
    return Object.keys(users).length;
}

submit.addEventListener('click', () => {
    const usernameUser = username.value;
    const passwordUser = password.value;

    const user = new User(usernameUser, passwordUser);

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);

    const requestBody = {
        username: usernameUser,
        password: passwordUser
    };

    fetch('https://26.157.2.248:7272/api/Auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => {
        if (response.ok) {
            console.log('Данные успешно отправлены в Swagger!');
        } else {
            console.error('Ошибка при отправке данных в Swagger:', response.status);
        }
    })
    .catch(error => {
        console.error('Ошибка при отправке данных в Swagger:', error);
    });
});

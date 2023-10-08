// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.


function getUserData(id) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            if (!res.ok) throw new Error(res.status);
            return res.json();
        })
        .then((data) => findId(data, id))
        .catch(err => console.log('Error status code: ' + err.message))
}

function findId(data, id) {
    const findElement = data.find((elem) => elem.id === id);
    console.log(findElement === undefined ? "Пользователь не найден" : findElement);
}
getUserData(5);
getUserData(15);

// ""Отправка данных на сервер""

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка *
// // Пример использования функции
function saveUserData(user) {
    fetch('https://jsonplaceholder.typicode.com/users', {
        metod: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(user)
    })
        .then(console.log('User data saved successfully'))
        .catch(error => {
            console.log(error.message);
        });
};

const user = {
    id: 11,
    name: 'John Smith',
    email: 'john@example.com'
};

saveUserData(user);



// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени



// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

function changeStyleDelayed(myElement, time) {
    setTimeout(('myElement.id = "super"'), time);
}
const myElement = document.querySelector('#myElement');
changeStyleDelayed('myElement', 2000);
// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
const minValue = Math.min(...arr);
console.log(minValue);

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(num) {
    let i = num;
    return {
        increment: () => { i++ },
        decrement: () => { i-- },
        result: () => i
    }
}

const num = 0;
const number = createCounter(num);
number.increment();
number.increment();
number.increment();
number.increment();
number.decrement();
console.log(number.result());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(parent, cl) {
    if(parent.classList && parent.classList.contains(cl)){
        return parent; 
    }
    for (let i = 0; i <= parent.children.length; i++) {
        return (findElementByClass(parent.children[i], cl))
    }
    return null;
}

const rootElement = document.body;
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);

// function findElementByClass(parent, cl) {
//     // Проверка, имеет ли текущий элемент искомый класс
//     if (parent.classList && parent.classList.contains(cl)) return parent;

//     // Перебор дочерних элементов
//     for (let i = 0; i < parent.children.length; i++) {
//         let child = parent.children[i];
//         let match = findElementByClass(child, cl); // Рекурсивный вызов для каждого дочернего элемента
//         if (match) return match; // Если найден искомый элемент, возвращаем его
//     }

//     // Если ничего не найдено, возвращаем null
//     return null;
// }

// // Получение корневого элемента
// const rootElement = document.body; // Или document.getElementById('root'), если у вас есть элемент с id 'root'

// // Поиск элемента с классом 'my-class'
// const targetElement = findElementByClass(rootElement, 'my-class');

// // Вывод найденного элемента в консоль
// console.log(targetElement);
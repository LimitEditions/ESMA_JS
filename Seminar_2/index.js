// Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is
// John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");

// const person = {
//     name: "John",
//     age: 25,
//     gender: "male",

//     introduce () {
//         console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}`);
//     },

//     changeName (newName) {
//         console.log(this.name = newName);
//     }
// }

// person.introduce ();
// person.changeName("Mike");

// Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.
// // Одалживание метода eat() из объекта Animal к объекту Dog
// Dog.eat = Animal.eat;
// Dog.eat(); // Вывод: Rex is eating.

// const animal = {
//     name: "",

//     eat() {
//         console.log(`${this.name} ест`);
//     }
// }

// const dog = {
//     name: "Ben",
//     bark() {
//         console.log(`${this.name} лает`);
//     }
// }

// dog.eat = animal.eat;
// animal.eat();
// dog.bark();
// dog.eat();

// Задание 3 (call, apply 20 минут)
// 1. Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

// const calculator = {
//     add(num1, num2) {
//         console.log(num1 + num2);
//     },

//     substract(num1, num2){
//         console.log(num1 - num2);
//     },

//     multiply(num1, num2){
//         console.log(num1 * num2);
//     }
// }

// const num1 = 5;
// const num2 = 3;
// calculator.add.call(null, num1, num2);
// calculator.substract.apply(null, [num1, num2]);
// calculator.multiply(num1, num2);

// Задание 4 (Объекты через class 25 минут)
// 1. Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.

class Person  {
        name = "";
        age = 0;

    // constructor (){}

        introduce = () => {
            console.log(`My name is ${this.name}. I'm ${this.age} years old.`);
        }
}

const John = new Person ();



/*Створити ф-ію isString, яка першим параметром отримує функцію колбек та другим значення
перевіряє чи передане значення це стрічка і колбек це функція та виконує колбек із цим значенням або виводить помилку
в консоль якщо це не стрічка або колбек не є функцією*/

function isString(callback, value) {
    if (typeof value === "string" && typeof callback === "function") {
        callback(value);
    } else {
        console.error("The value is not a string or the callback is not a function");
    }
}

isString((value) => console.log(value), "Hi, there");
isString((value) => console.log(value), 5555);

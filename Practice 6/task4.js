/*Створити клас який містить поле name.
Зробити так щоб це поле автоматично через 5с занулювалося(ставало null) після створення об’єкта
Також добавити функцію(метод) цього класу яка буде зупиняти(скасовувати) це занулювання*/

class Person {
    constructor(name) {
        this.name = name;
        this._timer = setTimeout(() => {
            this.name = null;
        }, 5000);
    }

    stopTimer() {
        clearInterval(this._timer);
    }
}

const person = new Person("John Doe");
console.log(person.name);

setTimeout(() => {
    person.stopTimer();
    console.log(person.name);
}, 5000);

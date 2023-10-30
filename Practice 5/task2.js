/*
1) Створити клас TodoItem із полями(властивостями): id(генерується у конструкторі за допомогою функції), name, checked(за замовчуванням false). 
Для поля checked написати гетер та сетер (добавити валідацію: поле може приймати лише булеве значення true або false)

2) Створити клас TodoList із полями: id(генерується у конструкторі за допомогою функції), name, items(за замовчуванням пустий масив).

Добавити наступні методи:
addItem - метод який добавляє елементи до масиву (потрібно зробити валідацію на тип TodoItem)
removeItemById - метод який видаляє елемент з масиву по id
getItemById - метод який повертає елемент TodoItem з масиву по id

3) Створити екземпляр класу TodoList;

4) Створити 4 екземпляри класу TodoItem, добавити їх у TodoList та вивести у консоль екземпляр класу TodoList.

5) Поміняти значення checked у одного екземпляру TodoItem та вивести TodoList у консоль( у масиві items це поле має бути оновлене)

6) Видалити 2 екземпляри TodoItem із TodoList та вивести у консоль TodoList(у масиві items має залишитись лише 2 екземпляри TodoItem)
*/

function generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }
  
  class TodoItem {
    constructor(name) {
      this.id = generateId();
      this.name = name;
      this._checked = false;
    }
  
    get checked() {
      return this._checked;
    }
  
    set checked(value) {
      if (typeof value === 'boolean') {
        this._checked = value;
      }
    }
  }
  
  class TodoList {
    constructor(name) {
      this.id = generateId();
      this.name = name;
      this.items = [];
    }
  
    addItem(item) {
      if (item instanceof TodoItem) {
        this.items.push(item);
      }
    }
  
    removeItemById(id) {
      this.items = this.items.filter(item => item.id !== id);
    }
  
    getItemById(id) {
      return this.items.find(item => item.id === id);
    }
  }
  
  const todoList = new TodoList("Список справ");
  
  const item1 = new TodoItem("Зробити завдання 24");
  const item2 = new TodoItem("Зробити завдання 27");
  const item3 = new TodoItem("Зробити завдання 30");
  const item4 = new TodoItem("Зробити завдання 33");
  
  todoList.addItem(item1);
  todoList.addItem(item2);
  todoList.addItem(item3);
  todoList.addItem(item4);
  
  console.log(todoList);
  
  item1.checked = true;
  console.log(todoList);
  
  todoList.removeItemById(item2.id);
  todoList.removeItemById(item4.id);
  console.log(todoList);
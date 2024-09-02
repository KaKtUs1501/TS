"use strict";
class Book {
    constructor(title, author, numberOfPages) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
        this.numberOfPages = numberOfPages;
    }
    borrow() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`${this.title} було позичено.`);
        }
        else {
            console.log(`${this.title} вже позичено.`);
        }
    }
}
class Magazine {
    constructor(title, author, issueNumber) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
        this.issueNumber = issueNumber;
    }
    borrow() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`${this.title} (Випуск №${this.issueNumber}) було позичено.`);
        }
        else {
            console.log(`${this.title} (Випуск №${this.issueNumber}) вже позичено.`);
        }
    }
}
class DVD {
    constructor(title, author, duration) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
        this.duration = duration;
    }
    borrow() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`${this.title} (тривалість: ${this.duration} хв) було позичено.`);
        }
        else {
            console.log(`${this.title} (тривалість: ${this.duration} хв) вже позичено.`);
        }
    }
}
class Library {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
        console.log(`Додано ${item.title} до бібліотеки.`);
    }
    findItemByName(name) {
        return this.items.find(item => item.title === name);
    }
    printAvailableItems() {
        console.log('Список доступних елементів:');
        this.items.forEach(item => {
            if (!item.isBorrowed) {
                console.log(`Назва: ${item.title}, Автор: ${item.author}`);
            }
        });
    }
}
// Створюємо бібліотеку
const library = new Library();
// Створюємо елементи бібліотеки
const book1 = new Book('Війна і мир', 'Лев Толстой', 1225);
const magazine1 = new Magazine('Наука і життя', 'Редактор: Іван Петров', 34);
const dvd1 = new DVD('Інтерстеллар', 'Крістофер Нолан', 169);
// Додаємо елементи до бібліотеки
library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);
// Позичаємо деякі елементи
book1.borrow(); // Війна і мир було позичено.
magazine1.borrow(); // Наука і життя (Випуск №34) було позичено.
// Виводимо список доступних елементів
library.printAvailableItems(); // Має відобразити тільки DVD, бо решта позичено
// Пошук елемента за назвою
const foundItem = library.findItemByName('Війна і мир');
if (foundItem) {
    console.log(`Знайдено елемент: ${foundItem.title}, Автор: ${foundItem.author}`);
}
else {
    console.log('Елемент не знайдено');
}

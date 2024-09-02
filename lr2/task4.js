"use strict";
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
class Developer extends Employee {
    getAnnualBonus() {
        return this.salary * 0.1;
    }
    pay() {
        console.log(this.salary + this.getAnnualBonus());
    }
}
class Manager extends Employee {
    getAnnualBonus() {
        return this.salary * 0.2;
    }
    pay() {
        console.log(this.salary + this.getAnnualBonus());
    }
}
let employees = [
    new Developer("Denis", 20, 400),
    new Manager("Kseniya", 19, 300)
];
let counter = 0;
employees.forEach(employee => {
    counter += employee.getAnnualBonus();
});
console.log(counter);

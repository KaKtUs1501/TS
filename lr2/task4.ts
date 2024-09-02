abstract class Employee{
    public name: string;
    public age: number;
    public salary: number;
    abstract getAnnualBonus(): number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}

interface Payable{
    pay(): void;
}

class Developer extends Employee implements Payable {
    getAnnualBonus(): number {
       return this.salary * 0.1;
    }

    pay(): void {
        console.log(this.salary + this.getAnnualBonus());
    }
}

class Manager extends Employee implements Payable {
    getAnnualBonus(): number {
        return this.salary * 0.2;
    }

    pay(): void {
        console.log(this.salary + this.getAnnualBonus());
    }
}

let employees: Employee[] = [
    new Developer("Denis", 20, 400),
    new Manager("Kseniya", 19, 300)
];

let counter = 0;

employees.forEach(employee => {
    counter += employee.getAnnualBonus()
})

console.log(counter);
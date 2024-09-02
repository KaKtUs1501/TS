"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    scale(factor) {
        this.radius *= factor;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    scale(factor) {
        this.width *= factor;
        this.height *= factor;
    }
}
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getArea() {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    scale(factor) {
        this.a *= factor;
        this.b *= factor;
        this.c *= factor;
    }
}
const shapes = [
    new Circle(5),
    new Rectangle(10, 4),
    new Triangle(3, 4, 5)
];
let totalArea = 0;
let totalPerimeter = 0;
for (const shape of shapes) {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}
console.log(`Загальна площа: ${totalArea}`);
console.log(`Загальний периметр: ${totalPerimeter}`);
for (const shape of shapes) {
    shape.scale(2);
}
console.log("Після масштабування:");
totalArea = 0;
totalPerimeter = 0;
for (const shape of shapes) {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}
console.log(`Загальна площа: ${totalArea}`);
console.log(`Загальний периметр: ${totalPerimeter}`);

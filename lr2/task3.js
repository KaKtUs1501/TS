"use strict";
class Car {
    constructor(model) {
        this.driverIsDrunk = false;
        this.model = model;
    }
    showInfo() {
        console.log(`Model: ${this.model}`);
        console.log(`Driver is drunk: ${this.driverIsDrunk}`);
    }
}
class Tesla extends Car {
    constructor(model, batteryLife, serialNumber) {
        super(model);
        this.batteryLife = batteryLife;
        this.serialNumber = serialNumber;
    }
    showInfo() {
        super.showInfo();
        console.log(`Battery Life: ${this.batteryLife} hours`);
        console.log(`Serial Number: ${this.serialNumber}`);
    }
}
class BMW extends Car {
    constructor(model, engineType) {
        super(model);
        this.engineType = engineType;
    }
    showInfo() {
        super.showInfo();
        console.log(`Engine Type: ${this.engineType}`);
    }
}
class Mercedes extends Car {
    constructor(model, luxuryPackage) {
        super(model);
        this.luxuryPackage = luxuryPackage;
    }
    showInfo() {
        super.showInfo();
        console.log(`Luxury Package: ${this.luxuryPackage ? "Included" : "Not Included"}`);
    }
}
let Igor = new Tesla("Model Y", 82, "ADRF133");
let teslaModelS = new Tesla("Model S", 100, "BXFR200");
let bmwX5 = new BMW("X5", "V8");
let bmwM3 = new BMW("M3", "Inline-6");
let mercedesSClass = new Mercedes("S-Class", true);
let mercedesEClass = new Mercedes("E-Class", false);
Igor.showInfo();
console.log("------------------");
teslaModelS.showInfo();
console.log("------------------");
bmwX5.showInfo();
console.log("------------------");
bmwM3.showInfo();
console.log("------------------");
mercedesSClass.showInfo();
console.log("------------------");
mercedesEClass.showInfo();

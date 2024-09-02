"use strict";
class Car {
    constructor(model) {
        this.driverIsDrunk = false;
        this.model = model;
    }
    showInfo() {
        console.log(this.model);
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
        console.log(this.batteryLife + this.serialNumber);
    }
}
class BMW extends Car {
}
class Mercedes extends Car {
}
let Igor = new Tesla("Model Y", 82, " ADRF133");
Igor.showInfo();

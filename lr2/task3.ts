abstract class Car {
    public model: string;
    protected driverIsDrunk: boolean = false;

    constructor(model: string) {
        this.model = model;
    }

    showInfo(): void {
        console.log(`Model: ${this.model}`);
        console.log(`Driver is drunk: ${this.driverIsDrunk}`);
    }
}

class Tesla extends Car {
    public batteryLife: number;
    private serialNumber: string;

    constructor(model: string, batteryLife: number, serialNumber: string) {
        super(model);
        this.batteryLife = batteryLife;
        this.serialNumber = serialNumber;
    }

    showInfo(): void {
        super.showInfo();
        console.log(`Battery Life: ${this.batteryLife} hours`);
        console.log(`Serial Number: ${this.serialNumber}`);
    }
}

class BMW extends Car {
    public engineType: string;

    constructor(model: string, engineType: string) {
        super(model);
        this.engineType = engineType;
    }

    showInfo(): void {
        super.showInfo();
        console.log(`Engine Type: ${this.engineType}`);
    }
}

class Mercedes extends Car {
    public luxuryPackage: boolean;

    constructor(model: string, luxuryPackage: boolean) {
        super(model);
        this.luxuryPackage = luxuryPackage;
    }

    showInfo(): void {
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

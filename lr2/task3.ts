abstract class Car {
    public model: string;
    constructor(model: string) {
        this.model = model;
    }
    showInfo(): void {
        console.log(this.model);
    }
    protected driverIsDrunk: boolean = false;
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
        console.log(this.batteryLife + this.serialNumber);
    }

}

class BMW extends Car {

}

class Mercedes extends Car {

}

let Igor = new Tesla("Model Y", 82, " ADRF133");
Igor.showInfo();
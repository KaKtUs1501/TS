interface AnimalHabit {
    run(): void;
    sleep(): void;
    eat(): void;
    hasFur: boolean;
}

class Cat implements AnimalHabit {
    run(): void{console.log("Running cat...");};
    sleep() {console.log("Sleeping cat...");}
    eat() {console.log("Eating cat...");};
    hasFur: boolean = true;
}

class Fish implements AnimalHabit {
    run(): void{console.log("Running fish...");};
    sleep() {console.log("Sleeping fish...");};
    eat() {console.log("Eating fish...");};
    hasFur: boolean = false;
}

class Bird implements AnimalHabit {
    run(): void{console.log("Running bird...");};
    sleep() {console.log("Sleeping bird...");};
    eat() {console.log("Eating bird...");};
    hasFur: boolean = false;
}

let bird = new Bird()
bird.run();

"use strict";
class Cat {
    constructor() {
        this.hasFur = true;
    }
    run() { console.log("Running cat..."); }
    ;
    sleep() { console.log("Sleeping cat..."); }
    eat() { console.log("Eating cat..."); }
    ;
}
class Fish {
    constructor() {
        this.hasFur = false;
    }
    run() { console.log("Running fish..."); }
    ;
    sleep() { console.log("Sleeping fish..."); }
    ;
    eat() { console.log("Eating fish..."); }
    ;
}
class Bird {
    constructor() {
        this.hasFur = false;
    }
    run() { console.log("Running bird..."); }
    ;
    sleep() { console.log("Sleeping bird..."); }
    ;
    eat() { console.log("Eating bird..."); }
    ;
}
let bird = new Bird();
bird.run();

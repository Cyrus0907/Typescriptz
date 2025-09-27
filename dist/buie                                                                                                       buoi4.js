"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// class
class Studen {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Tôi là ${this.name}, ${this.age} tuổi.`);
    }
}
const s1 = new Studen("Lan", 12);
const s2 = new Studen("Tú", 20);
s1.introduce();
s2.introduce();

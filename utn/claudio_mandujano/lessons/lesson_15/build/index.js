"use strict";
class Student {
    constructor(name, career, age) {
        this.career = career;
        this.name = name;
        this.age = age;
    }
    study() {
        console.log("la persona con nombre " + this.name + " esta estudiando " + this.career + " y tiene " + this.age);
    }
    walk() {
        console.log("Estoy caminando");
    }
}
const maria = new Student("maria", "informatica", 39);
maria.study();

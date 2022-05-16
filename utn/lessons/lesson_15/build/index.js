"use strict";
class Student {
    constructor(name, career, age) {
        this.name = name;
        this.career = career;
        this.age = age;
    }
    study() {
        console.log("La persona con nombre " + this.name + " y edad " + this.age + " esta estudiando " + this.career);
    }
    walk() {
        console.log("Estoy caminando");
    }
}
const maria = new Student("maria", "informatica", 18);
maria.study();

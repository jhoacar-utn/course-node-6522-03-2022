"use strict";
class Student {
    /**
     * Trabajar con private o protected o public es llamado encapsulamiento
     */
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
class Matematica {
    constructor() {
    }
    static suma(num1, num2) {
        return num1 + num2;
    }
}
Matematica.PI = 3.1415;
const maria = new Student("maria", "informatica", 18);
maria.study();
//const math = new Matematica();
console.log(Matematica.suma(Matematica.PI, 2));

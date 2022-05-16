"use strict";
class Student {
    /*
    trabajar con private o protected o public es llamado encapsulamiento
    */
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
class Mathematics {
    constructor() {
    }
    static suma(num1, num2) {
        return num1 + num2;
    }
}
Mathematics.PI = 3.1415;
//const maria = new Student("maria","informatica",39);
//maria.study();
//const math = new Mathematics();
console.log(Mathematics.suma(Mathematics.PI, 2));

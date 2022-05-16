interface Person {
    name: String;
    age: number;
    walk(): void;
}

class Student implements Person {

    private career: String;
    public name: String;
    public age: number;

    /**
     * Trabajar con private o protected o public es llamado encapsulamiento 
     */

    constructor(name: String, career: String, age: number) {
        this.name = name;
        this.career = career;
        this.age = age;
    }
    study() {
        console.log("La persona con nombre " + this.name + " y edad " + this.age + " esta estudiando " + this.career);
    }
    walk(): void {
        console.log("Estoy caminando");
    }
}

class Matematica {

    public static PI = 3.1415;

    constructor() {

    }

    public static suma(num1: number, num2: number) {
        return num1 + num2;
    }
}


const maria = new Student("maria", "informatica", 18);
maria.study();

//const math = new Matematica();
console.log(Matematica.suma(Matematica.PI,2));
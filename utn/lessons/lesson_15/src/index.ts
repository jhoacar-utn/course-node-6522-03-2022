interface Person {
    name: String;
    age: number;
    walk(): void;
}

class Student implements Person {

    private career: String;
    public name: String;
    public age: number;

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

const maria = new Student("maria", "informatica", 18);
maria.study();
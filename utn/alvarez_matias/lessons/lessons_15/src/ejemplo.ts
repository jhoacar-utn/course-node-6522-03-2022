//Clases


// class Person{
//     name:string
//     protected age:number

//     constructor(name:string, age:number){
//         this.name = name;
//         this.age = age;
//     }
// }

interface Person{
    name:string
    age:number
    walk():void;
}

class Student implements Person{

    private career:string;
    name: string;
    age: number;
    /**
     * Trabjar con private o public es llamado encapsulamiento
     */

    constructor(name:string , career:string, age:number){
        this.name = name;
        this.career = career;
        this.age = age;
    }
    study(){
        console.log("La persona con nombre "+this.name+ " y edad "+this.age+ " esta estudiando " +this.career)
    }
    walk():void {
        console.log("Estoy caminando")
    }
}

class Matematica{

    static PI = 3.1415

    constructor(){}

    static suma(num1:number, num2:number){
        return num1 + num2
    }
}

const maria = new Student ("maria", "informatica", 18)
maria.study()
// const math = new Matematica()
console.log(Matematica.suma(Matematica.PI,2))

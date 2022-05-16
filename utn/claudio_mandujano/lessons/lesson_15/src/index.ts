 interface Person{
    name:String;
    age:number;    
    walk():void;

 }

 class Student implements Person{

    private career:String;
    public name: String;
    public age:number;
    /*
    trabajar con private o protected o public es llamado encapsulamiento
    */    

    constructor(name:String, career:String, age:number){
      this.career = career;
      this.name = name;
      this.age = age;
      
    }

     study() {        
        console.log("la persona con nombre " +this.name+" esta estudiando "+this.career+" y tiene "+this.age);
    }

    walk(): void {
        console.log("Estoy caminando")
    }
 }


 class Mathematics{

    public static PI = 3.1415;
    
    constructor(){

    }

    public static suma(num1:number, num2:number){
        return num1+num2;
    }

 }


 //const maria = new Student("maria","informatica",39);

 //maria.study();

 //const math = new Mathematics();

 console.log(Mathematics.suma(Mathematics.PI,2))
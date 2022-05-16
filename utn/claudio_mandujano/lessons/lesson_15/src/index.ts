 interface Person{
    name:String;
     age:number;    
     walk():void;

 }

 class Student implements Person{

    private career:String;
    public name: String;
    public age:number;
    
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

 const maria = new Student("maria","informatica",39);

 maria.study();
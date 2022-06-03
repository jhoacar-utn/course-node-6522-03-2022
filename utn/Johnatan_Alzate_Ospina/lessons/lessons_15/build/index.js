"use strict";
/*interface Person{
     name:string;
     age:number;
     walk():void;

}


class student implements Person{
    
    private carreer:string;
    public name: string;
    public age:number;
    /*trabajar con private, protected o public es llamado encapsulamiento
    las clases implementan interfaces pero las interfaces no pueden implementar clases*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = __importDefault(require("console"));
/*
 constructor (name:string,carrer:string,age:number){
     this.carreer=carrer,
     this.name=name,
     this.age=age
 }

study(){
  console.log("the person whit name "+ this.name +" y edad " +this.age+ " is studing " + this.carreer)
 }
 walk(): void {
     
 console.log("Estoy caminando")
 }
     
 }
 const maria= new student("informatica","maria",25)
maria.study()


class Mathematica{
static PI=3.1415
constructor(){

}
static suma(num1:number,num2:number){
   return num1+num2
}
}

console.log(Mathematica.suma(Mathematica.PI,2))*/
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//require("dotenv").config()
const express_1 = __importDefault(require("express"));
//const express=require("express")
const avatar_1 = __importDefault(require("./routes/avatar"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //habilita la seccion del boddy
app.use("/avatar", avatar_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console_1.default.log("Server on port " + PORT);
});

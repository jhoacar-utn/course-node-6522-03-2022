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

import console from "console"

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
import dontenv from "dotenv";
dontenv.config()
//require("dotenv").config()
import express from "express"
import { getAvatar } from "./controllers/avatar";
//const express=require("express")

import avatarRoute from"./routes/avatar"


const app=express()
app.use(express.json())//habilita la seccion del boddy
app.use("/avatar",avatarRoute)


const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Server on port "+PORT)
})
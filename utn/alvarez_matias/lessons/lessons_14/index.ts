// let Name:string = 'Matias'
// let names:string[] = ["Matias", "Alvarez", "Alumno"]
// names.push("Name")
// console.log(Name, names)

import { idText } from "typescript"

enum DaysSOfWeek  {
    Monday = 1,
    Tuesday,
    Wensday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
const workedDays:number[] = [DaysSOfWeek.Monday]

function addWorkedDay(dayworked:number,customLog:string="Se ha agregado", info?:string):string{
    workedDays.push(dayworked)
    const mesaageInfo = info ? "-"+info : ""
        return `${customLog} ${dayworked} ${mesaageInfo}`
}
console.log(addWorkedDay(DaysSOfWeek.Tuesday)) 
console.log(addWorkedDay(DaysSOfWeek.Wensday ,"Dia agregado","Miercoles")) 

const addDays = function(otroString:string, ...days:any[]) {
    console.log(days)
}

addDays("Un string", DaysSOfWeek.Tuesday)
addDays("Otro string", DaysSOfWeek.Friday, DaysSOfWeek.Saturday, DaysSOfWeek.Sunday)
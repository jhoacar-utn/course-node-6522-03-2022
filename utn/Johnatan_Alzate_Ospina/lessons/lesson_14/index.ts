/*let Name:string="johnatan"
console.log(Name)

let other:string[]=["julian","Johnatan","88"]
console.log(other)*/

enum Daysofweek{
    monday=1,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
}
const workedDay: number[]=[Daysofweek.monday]

function addWorkedDay(dayWorked:number, info?: string, customlog:string="Se ha agregado"):string{
  
    workedDay.push(dayWorked)
  
    const mesageInfo= info ? "- " +info:"" //operador ternario
  
    return customlog+dayWorked + mesageInfo
}  
console.log(addWorkedDay(Daysofweek.tuesday))
console.log(addWorkedDay(Daysofweek.wednesday,"Dia agregado","miercoles"))

const addDays= function(...days:any){
console.log(days)
}
addDays(Daysofweek.thursday)
addDays(Daysofweek.friday,Daysofweek.monday,Daysofweek.sunday)
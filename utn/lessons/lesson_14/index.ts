enum DaysOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const workedDays:number[] = [DaysOfWeek.Monday];

const addWorkedDay =  function(dayWorked:number):string {

    workedDays.push(dayWorked);

    return "Dia agregado"; 
};



let Name:String = "Jhoan";

let names:string[] = ["Jhoan", "Carrero"]; 

names.push("Name");

console.log(names);
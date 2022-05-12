let Name:String = "Jhonny"; 
console.log(Name); 

let names: String[] = ["jhonny", "berdeja"];
names.push("milton");

console.log(names);

enum DaysOfWeek{
    Monday = 1,
    martes,
    miercoles,
    jueves,
    viernes,
    sabado,
    domingo
}

const workedDays: Number[] = [DaysOfWeek.Monday, DaysOfWeek.martes];

function addWorkedDays(dayWorked: Number): String{
    workedDays.push(dayWorked);
    return "Dia agregado";
}

addWorkedDays(DaysOfWeek.miercoles);

console.log(workedDays);
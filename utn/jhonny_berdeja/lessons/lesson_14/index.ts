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

//El tercer parametro no es obligatorio y el segundo tiene un valor por defeto
function addWorkedDays(dayWorked: Number, customLog: String = "Se ha agregado", info?: String): String{
    workedDays.push(dayWorked);

    const messageInfo = info != undefined? "- " + info: "";

    return `${customLog}  ${dayWorked}  ${messageInfo}`;
}

console.log(addWorkedDays(DaysOfWeek.miercoles));
console.log(addWorkedDays(DaysOfWeek.jueves, "Dia agregado","viernes"));

console.log(workedDays);

//Parametro "strate operator" para definir n cantidad de parametors, este siempre debe ser el ultimo parametro
const addDays = function(...days:any[]){
    console.log(days);
}

addDays(DaysOfWeek.miercoles);
addDays(DaysOfWeek.miercoles, DaysOfWeek.jueves, DaysOfWeek.viernes);
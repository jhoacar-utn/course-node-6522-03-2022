let Name:String = "Julia";

//javascript -> trabaja con valores de tipo "any"
let list2:any[] = ["Tengo",25,"años"]

//Una variable, llamada "list", que va a contener valores de tipo "string", y los va a contener en forma de array
let list:string[] = ["hola","soy","julia"]

list.push("Ribotto");

function setName(name:string):void {
    list.push(name);

    console.log(list)
}

//console.log(list);
setName("Otaño");

//#########################################################

enum DaysOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};

const workedDays:number[] = [DaysOfWeek.Monday];

function setWorkdDay2(dayWorked:number):number {
    
    workedDays.push(dayWorked);

    return dayWorked

}

function setWorkdDay(dayWorked:number,info?:string, customLog="Se ha agregado"):string {
    
    workedDays.push(dayWorked);

    //operador ternario -> condicion ? caso true : caso false
    const msgInfo = (info !== undefined) ? `-> ${info}` : "";


    return `${customLog} ${dayWorked} ${msgInfo}`
}

console.log(setWorkdDay(DaysOfWeek.Tuesday,undefined,"Día agregado"));

//Spread operator
function addDays (param:string,...days:any[]) {
    console.log(param + days);
}

addDays("Días ",DaysOfWeek.Friday, DaysOfWeek.Saturday, DaysOfWeek.Sunday)
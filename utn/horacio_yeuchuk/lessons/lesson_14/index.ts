enum DaysOfWeek{
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const workedDays:number[]=[DaysOfWeek.Monday];

let Name:string[] =['jhoan','jack'];
Name.push("name");

function addWorkedDay(dayWorked:number,custonLog:string="se ha agregado",info?:string):string{
  workedDays.push(dayWorked);
  
  const messageInfo=(info !==undefined) ? "- " + info :"";

  return `${custonLog} ${dayWorked} ${messageInfo}`; 
}

console.log(addWorkedDay(DaysOfWeek.Tuesday));
console.log(addWorkedDay(DaysOfWeek.Wednesday,"dia agregado","miercoles"));


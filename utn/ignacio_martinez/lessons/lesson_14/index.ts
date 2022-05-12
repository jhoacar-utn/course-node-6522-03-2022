enum DaysofWeek {
    Monday =1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const workedDays:number[] = [DaysofWeek.Monday];

const addWorkedDay = function(dayWorked:number, otroLog="Se ha agregado ", info?:string):string{

    workedDays.push(dayWorked);

    const messegeInfo = info ? "- "+info : "";

    return otroLog + dayWorked + " "+ messegeInfo;

};

console.log(addWorkedDay(DaysofWeek.Tuesday));

console.log(addWorkedDay(DaysofWeek.Wednesday,"Dia agregado","Miercoles"));


const addDays = function (...days:any){

    console.log(days);
}

addDays(DaysofWeek.Thursday);

addDays(DaysofWeek.Friday, DaysofWeek.Saturday, DaysofWeek.Sunday);

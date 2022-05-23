enum DaysOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const workedDays: number[] = [DaysOfWeek.Monday];

const addWorkedDay = function (dayWorked: number, otroLog:string = "Se ha agregado", info?: string ): string {

    workedDays.push(dayWorked);

    const messageInfo = info ? "- " + info  : "";
    
    // let messageInfo:string = "";
    
    // if(info!==undefined)
    //     messageInfo = "- "+ info;
    // else
    //     messageInfo = "";


    return `${otroLog} ${dayWorked} ${messageInfo}`;
};

console.log(  addWorkedDay(DaysOfWeek.Tuesday)  );


console.log ( addWorkedDay(DaysOfWeek.Wednesday,"Dia agregado","Miercoles")  );


const addDays = function ( otroParametro:string , ...days:any[]){

    console.log(days);
}

addDays("un string" ,DaysOfWeek.Thursday );

addDays( "otro string", DaysOfWeek.Friday, DaysOfWeek.Saturday, DaysOfWeek.Sunday  );


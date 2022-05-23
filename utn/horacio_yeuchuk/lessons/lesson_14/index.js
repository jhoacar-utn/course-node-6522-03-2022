var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 4] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 5] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 6] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 7] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
var workedDays = [DaysOfWeek.Monday];
var addWorkedDay = function (dayWorked, otroLog, info) {
    if (otroLog === void 0) { otroLog = "Se ha agregado"; }
    workedDays.push(dayWorked);
    var messageInfo = info ? "- " + info : "";
    // let messageInfo:string = "";
    // if(info!==undefined)
    //     messageInfo = "- "+ info;
    // else
    //     messageInfo = "";
    return "".concat(otroLog, " ").concat(dayWorked, " ").concat(messageInfo);
};
console.log(addWorkedDay(DaysOfWeek.Tuesday));
console.log(addWorkedDay(DaysOfWeek.Wednesday, "Dia agregado", "Miercoles"));
var addDays = function () {
    var days = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        days[_i] = arguments[_i];
    }
    console.log(days);
};
addDays(DaysOfWeek.Thursday);
addDays(DaysOfWeek.Friday, DaysOfWeek.Saturday, DaysOfWeek.Sunday);

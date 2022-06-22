var DaysofWeek;
(function (DaysofWeek) {
    DaysofWeek[DaysofWeek["Monday"] = 1] = "Monday";
    DaysofWeek[DaysofWeek["Tuesday"] = 2] = "Tuesday";
    DaysofWeek[DaysofWeek["Wednesday"] = 3] = "Wednesday";
    DaysofWeek[DaysofWeek["Thursday"] = 4] = "Thursday";
    DaysofWeek[DaysofWeek["Friday"] = 5] = "Friday";
    DaysofWeek[DaysofWeek["Saturday"] = 6] = "Saturday";
    DaysofWeek[DaysofWeek["Sunday"] = 7] = "Sunday";
})(DaysofWeek || (DaysofWeek = {}));
var workedDays = [DaysofWeek.Monday];
var addWorkedDay = function (dayWorked, otroLog, info) {
    if (otroLog === void 0) { otroLog = "Se ha agregado "; }
    workedDays.push(dayWorked);
    var messegeInfo = info ? "- " + info : "";
    return otroLog + dayWorked + " " + messegeInfo;
};
console.log(addWorkedDay(DaysofWeek.Tuesday));
console.log(addWorkedDay(DaysofWeek.Wednesday, "Dia agregado", "Miercoles"));
var addDays = function () {
    var days = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        days[_i] = arguments[_i];
    }
    console.log(days);
};
addDays(DaysofWeek.Thursday);
addDays(DaysofWeek.Friday, DaysofWeek.Saturday, DaysofWeek.Sunday);

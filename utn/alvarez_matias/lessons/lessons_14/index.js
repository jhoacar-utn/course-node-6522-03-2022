"use strict";
// let Name:string = 'Matias'
// let names:string[] = ["Matias", "Alvarez", "Alumno"]
// names.push("Name")
// console.log(Name, names)
exports.__esModule = true;
var DaysSOfWeek;
(function (DaysSOfWeek) {
    DaysSOfWeek[DaysSOfWeek["Monday"] = 1] = "Monday";
    DaysSOfWeek[DaysSOfWeek["Tuesday"] = 2] = "Tuesday";
    DaysSOfWeek[DaysSOfWeek["Wensday"] = 3] = "Wensday";
    DaysSOfWeek[DaysSOfWeek["Thursday"] = 4] = "Thursday";
    DaysSOfWeek[DaysSOfWeek["Friday"] = 5] = "Friday";
    DaysSOfWeek[DaysSOfWeek["Saturday"] = 6] = "Saturday";
    DaysSOfWeek[DaysSOfWeek["Sunday"] = 7] = "Sunday";
})(DaysSOfWeek || (DaysSOfWeek = {}));
var workedDays = [DaysSOfWeek.Monday];
function addWorkedDay(dayworked, customLog, info) {
    if (customLog === void 0) { customLog = "Se ha agregado"; }
    workedDays.push(dayworked);
    var mesaageInfo = info ? "-" + info : "";
    return "".concat(customLog, " ").concat(dayworked, " ").concat(mesaageInfo);
}
console.log(addWorkedDay(DaysSOfWeek.Tuesday));
console.log(addWorkedDay(DaysSOfWeek.Wensday, "Dia agregado", "Miercoles"));
var addDays = function (otroString) {
    var days = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        days[_i - 1] = arguments[_i];
    }
    console.log(days);
};
addDays("Un string", DaysSOfWeek.Tuesday);
addDays("Otro string", DaysSOfWeek.Friday, DaysSOfWeek.Saturday, DaysSOfWeek.Sunday);

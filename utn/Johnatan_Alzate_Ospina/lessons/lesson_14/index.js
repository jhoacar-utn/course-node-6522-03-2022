/*let Name:string="johnatan"
console.log(Name)

let other:string[]=["julian","Johnatan","88"]
console.log(other)*/
var Daysofweek;
(function (Daysofweek) {
    Daysofweek[Daysofweek["monday"] = 1] = "monday";
    Daysofweek[Daysofweek["tuesday"] = 2] = "tuesday";
    Daysofweek[Daysofweek["wednesday"] = 3] = "wednesday";
    Daysofweek[Daysofweek["thursday"] = 4] = "thursday";
    Daysofweek[Daysofweek["friday"] = 5] = "friday";
    Daysofweek[Daysofweek["saturday"] = 6] = "saturday";
    Daysofweek[Daysofweek["sunday"] = 7] = "sunday";
})(Daysofweek || (Daysofweek = {}));
var workedDay = [Daysofweek.monday];
function addWorkedDay(dayWorked, info, customlog) {
    if (customlog === void 0) { customlog = "Se ha agregado"; }
    workedDay.push(dayWorked);
    var mesageInfo = info ? "- " + info : ""; //operador ternario
    return customlog + dayWorked + mesageInfo;
}
console.log(addWorkedDay(Daysofweek.tuesday));
console.log(addWorkedDay(Daysofweek.wednesday, "Dia agregado", "miercoles"));
var addDays = function () {
    var days = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        days[_i] = arguments[_i];
    }
    console.log(days);
};
addDays(Daysofweek.thursday);
addDays(Daysofweek.friday, Daysofweek.monday, Daysofweek.sunday);

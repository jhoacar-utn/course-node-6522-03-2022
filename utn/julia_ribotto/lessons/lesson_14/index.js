var Name = "Julia";
//javascript -> trabaja con valores de tipo "any"
var list2 = ["Tengo", 25, "años"];
//Una variable, llamada "list", que va a contener valores de tipo "string", y los va a contener en forma de array
var list = ["hola", "soy", "julia"];
list.push("Ribotto");
function setName(name) {
    list.push(name);
    console.log(list);
}
//console.log(list);
setName("Otaño");
//#########################################################
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
;
var workedDays = [DaysOfWeek.Monday];
function setWorkdDay2(dayWorked) {
    workedDays.push(dayWorked);
    return dayWorked;
}
function setWorkdDay(dayWorked, info, customLog) {
    if (customLog === void 0) { customLog = "Se ha agregado"; }
    workedDays.push(dayWorked);
    //operador ternario -> condicion ? caso true : caso false
    var msgInfo = (info !== undefined) ? "-> ".concat(info) : "";
    return "".concat(customLog, " ").concat(dayWorked, " ").concat(msgInfo);
}
console.log(setWorkdDay(DaysOfWeek.Tuesday, undefined, "Día agregado"));
//Spread operator
function addDays(param) {
    var days = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        days[_i - 1] = arguments[_i];
    }
    console.log(param + days);
}
addDays("Días ", DaysOfWeek.Friday, DaysOfWeek.Saturday, DaysOfWeek.Sunday);

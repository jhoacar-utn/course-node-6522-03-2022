var Name = "Jhonny";
console.log(Name);
var names = ["jhonny", "berdeja"];
names.push("milton");
console.log(names);
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
    DaysOfWeek[DaysOfWeek["martes"] = 2] = "martes";
    DaysOfWeek[DaysOfWeek["miercoles"] = 3] = "miercoles";
    DaysOfWeek[DaysOfWeek["jueves"] = 4] = "jueves";
    DaysOfWeek[DaysOfWeek["viernes"] = 5] = "viernes";
    DaysOfWeek[DaysOfWeek["sabado"] = 6] = "sabado";
    DaysOfWeek[DaysOfWeek["domingo"] = 7] = "domingo";
})(DaysOfWeek || (DaysOfWeek = {}));
var workedDays = [DaysOfWeek.Monday, DaysOfWeek.martes];
//El tercer parametro no es obligatorio y el segundo tiene un valor por defeto
function addWorkedDays(dayWorked, customLog, info) {
    if (customLog === void 0) { customLog = "Se ha agregado"; }
    workedDays.push(dayWorked);
    var messageInfo = info != undefined ? "- " + info : "";
    return "".concat(customLog, "  ").concat(dayWorked, "  ").concat(messageInfo);
}
console.log(addWorkedDays(DaysOfWeek.miercoles));
console.log(addWorkedDays(DaysOfWeek.jueves, "Dia agregado", "viernes"));
console.log(workedDays);
var addDays = function () {
    var days = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        days[_i] = arguments[_i];
    }
    console.log(days);
};
addDays(DaysOfWeek.miercoles);
addDays(DaysOfWeek.miercoles, DaysOfWeek.jueves, DaysOfWeek.viernes);

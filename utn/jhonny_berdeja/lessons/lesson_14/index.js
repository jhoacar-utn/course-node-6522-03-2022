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
function addWorkedDays(dayWorked) {
    workedDays.push(dayWorked);
    return "Dia agregado";
}
addWorkedDays(DaysOfWeek.miercoles);
console.log(workedDays);

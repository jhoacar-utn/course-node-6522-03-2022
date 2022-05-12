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
var Name = ['jhoan', 'jack'];
Name.push("name");
function addWorkedDay(dayWorked, custonLog, info) {
    if (custonLog === void 0) { custonLog = "se ha agregado"; }
    workedDays.push(dayWorked);
    var messageInfo = (info !== undefined) ? "- " + info : "";
    return "".concat(custonLog, " ").concat(dayWorked, " ").concat(messageInfo);
}
console.log(addWorkedDay(DaysOfWeek.Tuesday));
console.log(addWorkedDay(DaysOfWeek.Wednesday, "dia agregado", "miercoles"));

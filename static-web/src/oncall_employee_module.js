const employeeClass = require('../src/employee_class');
const oncallCalendarModule = require('../src/oncall_calendar_module');

function createEmployeeArrayFromDelimittedString(string, delimitter){
    var employeenames = string.split(delimitter);
    var employees = [];
    employeenames.forEach((element,index) => {
        var names = element.trim().split(' ');
        employees.push(new employeeClass(index,names[0],names[1]));
    });
    return employees;
}

function scheduleEmployeeForWeek(employee, week, schedule){
    schedule[week-1].employee = employee;
}

module.exports = {createEmployeeArrayFromDelimittedString, scheduleEmployeeForWeek};
const oncallEmployeeModule = require('../src/oncall_employee_module');
const employeeClass = require('../src/employee_class');
const oncallCalendarModule = require('../src/oncall_calendar_module');

var testemployees = ["Jane Prince", "Jack Daniels", "Steve Lowe", "Alister Bird", "Peter Lee"];
var employeeArray = oncallEmployeeModule.createEmployeeArrayFromDelimittedString(testemployees.toString(),',');
test('Test createEmployeeArrayFromDelimittedString returned employee class array should have same length as test employee array', ()=>{
    expect(employeeArray.length).toEqual(testemployees.length);
});
test('Test createEmployeeArrayFromDelimittedString returned employee class that matches the first value in test employee array', ()=> {
    testemployees.forEach( (testemployee, i) => {
        employee = employeeArray[i];
        expect(testemployee).toEqual(`${employee.firstname} ${employee.lastname}`);
    });

});

var schedule = oncallCalendarModule.buildScheduleForFiscalYear(new Date());
var weeks_employee_one = [1, 11, 21, 41, 51];
weeks_employee_one.forEach( week => {
    oncallEmployeeModule.scheduleEmployeeForWeek(employeeArray[1], week, schedule);
});
var checkweeks = schedule.filter( x =>  weeks_employee_one.includes(x.week));
test('Test scheduleEmployeeForWeek ', ()=> {
    checkweeks.forEach( (week) => {
        expect(week.employee).toEqual(employeeArray[1]);
    });

});
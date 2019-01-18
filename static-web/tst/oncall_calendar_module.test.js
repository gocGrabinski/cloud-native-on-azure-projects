const oncallCalendarModule = require('../src/oncall_calendar_module');

var date1 = new Date('April 3, 2018 00:00:00');
var date2 = new Date('April 2, 2019 00:00:00');
var date3 = new Date('April 7, 2015 00:00:00');
var date4 = new Date('April 6, 2021 00:00:00');
var date5 = new Date('April 4, 2023 00:00:00');
test('Parameter 2018 expected to return date of April 3, 2018 00:00:00', () => {
    expect(oncallCalendarModule.getFirstTuesdayOfFiscalYear(2018)).toEqual(date1);
});
test('Parameter 2019 expected to return date of April 2, 2019 00:00:00', () => {
    expect(oncallCalendarModule.getFirstTuesdayOfFiscalYear(2019)).toEqual(date2);
});
test('Parameter 2015 expected to return date of April 7, 2015 00:00:00', () => {
    expect(oncallCalendarModule.getFirstTuesdayOfFiscalYear(2015)).toEqual(date3);
});
test('Parameter 2021 expected to return date of April 6, 2021 00:00:00', () => {
    expect(oncallCalendarModule.getFirstTuesdayOfFiscalYear(2021)).toEqual(date4);
});
test('Parameter 2023 expected to return date of April 4, 2023 00:00:00', () => {
    expect(oncallCalendarModule.getFirstTuesdayOfFiscalYear(2023)).toEqual(date5);
});

var date6 = new Date('April 1, 2019 00:00:00');
test('Parameter April 3, 2018  expected to return 52 week schedule ending on April 1, 2019', () => {
    var schedule = oncallCalendarModule.buildScheduleForFiscalYear(date1);
    expect(schedule.length).toEqual(52);
    expect(schedule[0].week).toEqual(1);
    expect(schedule[51].week).toEqual(52);
    expect(schedule[51].ends).toEqual(date6);

    console.log(schedule);
});
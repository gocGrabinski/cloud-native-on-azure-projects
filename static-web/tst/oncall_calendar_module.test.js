// import testdemofunction from '../src/oncall_calendar_module'

const getFirstTuesdayOfFiscalYear = require('../src/oncall_calendar_module');
var date1 = new Date('April 3, 2018 00:00:00');
var date2 = new Date('April 2, 2019 00:00:00');
var date3 = new Date('April 7, 2015 00:00:00');
var date4 = new Date('April 6, 2021 00:00:00');
var date5 = new Date('April 4, 2023 00:00:00');
test('Parameter 2018 expected to return date of April 3, 2018 00:00:00', () => {
    expect(getFirstTuesdayOfFiscalYear(2018)).toEqual(date1);
});
test('Parameter 2019 expected to return date of April 2, 2019 00:00:00', () => {
    expect(getFirstTuesdayOfFiscalYear(2019)).toEqual(date2);
});
test('Parameter 2015 expected to return date of April 7, 2015 00:00:00', () => {
    expect(getFirstTuesdayOfFiscalYear(2015)).toEqual(date3);
});
test('Parameter 2021 expected to return date of April 6, 2021 00:00:00', () => {
    expect(getFirstTuesdayOfFiscalYear(2021)).toEqual(date4);
});
test('Parameter 2023 expected to return date of April 4, 2023 00:00:00', () => {
    expect(getFirstTuesdayOfFiscalYear(2023)).toEqual(date5);
});
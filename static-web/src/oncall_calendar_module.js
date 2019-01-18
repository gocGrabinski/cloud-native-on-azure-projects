const onCallWeekClass = require('../src/oncallweek_class');

function getFirstTuesdayOfFiscalYear(startInYear) {
    var date = 1;
    var aprilfirst = new Date(getDateStringForAprilYearDay(startInYear, date));
    var day = aprilfirst.getDay(); //Tuesday === 2
    if (day < 2) {
        date = 1 + (2 - day);
        return new Date(getDateStringForAprilYearDay(startInYear, date));
    }
    if (day > 2) {
        date = 1 + (7 - (day - 2));
        return new Date(getDateStringForAprilYearDay(startInYear, date));
    }
    return aprilfirst;
}

function getDateStringForAprilYearDay(year, date) {
    return `April ${date}, ${year} 00:00:00`;
}

function buildScheduleForFiscalYear(startDate) {
    var schedule = [];
    var begindate = startDate;
    var enddate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 6);
    for (i = 0; i < 52; i++) {
        schedule.push(new onCallWeekClass(i + 1, begindate, enddate));
        begindate = new Date(begindate.getFullYear(), begindate.getMonth(), begindate.getDate() + 7);
        enddate = new Date(begindate.getFullYear(), begindate.getMonth(), begindate.getDate() + 6);
    }
    return schedule;
}

module.exports = { getFirstTuesdayOfFiscalYear, buildScheduleForFiscalYear };
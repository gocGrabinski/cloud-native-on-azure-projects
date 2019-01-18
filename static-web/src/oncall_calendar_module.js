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
    var begin = new Date();
    begin.setDate(startDate.getDate());
    var end = new Date();
    end.setDate(begin.getDate() + 6);
    for (i = 0; i < 52; i++) {
        schedule.push({ "week": i + 1, "begins": begin, "ends": end });
        begin.setDate(begin.getDate() + 7);
        end.setDate(end.getDate() + 7);
    }
    return schedule;
}

module.exports = { getFirstTuesdayOfFiscalYear, buildScheduleForFiscalYear };
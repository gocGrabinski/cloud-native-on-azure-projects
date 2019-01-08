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

module.exports = getFirstTuesdayOfFiscalYear;
function printSeasonByMonth(month) {
    const uppercaseMonth = month.toUpperCase();

    switch (uppercaseMonth) {
        case "DECEMBER":
        case "JANUARY":
        case "FEBRUARY":
            console.log("Зима");
            break;
        case "MARCH":
        case "APRIL":
        case "MAY":
            console.log("Весна");
            break;
        case "JUNE":
        case "JULY":
        case "AUGUST":
            console.log("Літо");
            break;
        case "SEPTEMBER":
        case "OCTOBER":
        case "NOVEMBER":
            console.log("Осінь");
            break;
        default:
            console.log("Невідомий місяць");
            break;
    }
}

printSeasonByMonth("SEPTEMBER");
printSeasonByMonth("NOVEMBER");
printSeasonByMonth("JULY");
printSeasonByMonth("APRIL");
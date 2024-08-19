function leapYears(año) {
    console.log((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0));
}

leapYears(2020);
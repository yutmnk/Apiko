function printPowsOf2(number) {
    if (typeof number === 'number') {
        for (let i = 0; Math.pow(2, i) <= number; i++) {
            console.log(Math.pow(2, i));
        }
    } 
    else {
        console.log('Дане значення не є числом');
    }
}

printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(60);
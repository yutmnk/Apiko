function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
    let sum = 0;

    for (let i = 0; i < initialArray.length; i++) {
        const currentItem = initialArray[i];

        if (typeof currentItem === 'number' && !isNaN(currentItem)) {
            sum += currentItem;
        }
    }

    console.log('Сума чисел у масиві: ' + sum);
}

calculateSumOfArray();

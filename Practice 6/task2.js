/* Дано: обєкт Date та його методи https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
Створити ф-ію clock, яка імітує поведінку годинника: кожну секунду виводить в консоль час у форматі "Hours:Minutes:Seconds";*/

function clock() {
    const interval = setInterval(() => {
        const date = new Date();
        console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    }, 1000);

    return () => clearInterval(interval);
}

setTimeout(clock(), 10000);
/*Створити ф-ію timer, яка приймає число(секунди) та імітує поведінку таймера: кожну секунду виводить в консоль стрічку 
Timer: ${s}, де ${s} - кількість секунд що залишилось*/

function timer(seconds) {
    const interval = setInterval(() => {
        seconds--;
        console.log(`Timer: ${seconds}`);
        if (seconds <= 0) {
            clearInterval(interval);
        }
    }, 1000);

    return () => clearInterval(interval);
}

timer(10);
setTimeout(timer(10), 10000);

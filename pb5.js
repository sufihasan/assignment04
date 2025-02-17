function calculateSleepTime(times) {
    let sum = 0;
    for (const time of times) {
        if (typeof time !== 'number') {
            return 'Invalid';
        }
        sum = sum + time;
    }

    console.log('sum', sum);


    let totalMin = parseInt(sum / 60);
    let totalSec = sum % 60;
    let totalHour = 0;


    const totalTime = { hour: 0, minute: 0, second: 0 };

    if (totalMin >= 60) {
        totalHour = parseInt(totalMin / 60);
        totalMin = totalMin % 60;

    }

    totalTime.hour = totalHour;
    totalTime.minute = totalMin;
    totalTime.second = totalSec;

    console.log(totalHour, totalMin, totalSec);
    console.log(totalTime);



}




const result = calculateSleepTime([100, 3800, "asd"]);
console.log(result);

function calculateVAT(price) {

    if (typeof price !== 'number' || price < 0) {
        return 'Invalid';
    }

    const priceOfVat = price * (7.5 / 100);
    return priceOfVat;
}



function validContact(contact) {

    if (typeof contact !== 'string') {

        return 'Invalid';
    }

    let temp = false;

    for (let i = 0; i < contact.length; i++) {

        if (contact[i] === ' ') {
            temp = true;
            break;
        }
    }


    if (contact.length === 11 && contact[0] === '0' && contact[1] === '1' && temp === false) {

        return true;
    }
    else {
        return false;
    }


}


function willSuccess(marks) {
    if (!Array.isArray(marks)) {
        return 'Invalid';

    }
    const pass = [];
    const fail = [];
    for (const mark of marks) {

        if (mark >= 50) {
            pass.push(mark);
        }
        else {
            fail.push(mark);
        }

    }


    if (pass.length > fail.length) {
        return true;
    }
    else {
        return false;
    }
}



function validProposal(person1, person2) {

    if (typeof person1 !== 'object' || typeof person2 !== 'object' || Array.isArray(person1)
        || Array.isArray(person2)) {
        return 'Invalid';
    }

    const ageDiff = Math.abs(person1.age - person2.age);

    if (person1.gender !== person2.gender && ageDiff <= 7) {
        return true;
    }
    else {
        return false;
    }
}



function calculateSleepTime(times) {
    if (!Array.isArray(times)) {
        return 'Invalid';
    }
    let sum = 0;
    for (const time of times) {
        if (typeof time !== 'number') {
            return 'Invalid';
        }
        sum = sum + time;
    }



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


    return totalTime;

}





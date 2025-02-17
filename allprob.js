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
        // console.log(mark);
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




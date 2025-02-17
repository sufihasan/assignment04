
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


const result = willSuccess([60, 70, 80, 40, 30]);
console.log(result);

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



const result = validProposal({ name: "shuvo", gender: "male", age: 20 },
    { name: "joy", gender: "male", age: 25 }

);
console.log(result);

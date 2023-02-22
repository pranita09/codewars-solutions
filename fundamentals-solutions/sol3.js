// Question 01: This time no story, no theory. The examples below show you how to write function accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s){
    let arr = s.split("");
    let outputArray = [];
    for(let i=0; i<arr.length; i++){
        outputArray.push(arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i));
    }
    console.log(outputArray);
    let expectedOutput = outputArray.join('-');
    return expectedOutput;
}

function accum1(s){
    let arr = [...s];
    let outputArray = arr.map((letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index));
    console.log(outputArray);
    const expectedOutput = outputArray.join("-");
    return expectedOutput;
}

function accum2(s){
    return s.split('').map((letter,index) => letter.toUpperCase()+ letter.toLowerCase().repeat(index)).join('-');
}

// console.log(accum1("Alka"));


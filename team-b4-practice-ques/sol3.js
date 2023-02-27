// Question
// You have given an lower case string and an array of numbers, capitalize the characters that lie on the indices determined by the numbers in the array.


const strGiven = "abcdefgh";
const arrGiven = [2,4,5];

const indexedCapitalizer = (str, arr) => {
    let newArr = str.split('');
    for(let i=0; i<newArr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i === arr[j]){
                newArr[i] = newArr[i].toUpperCase();
            }
        }
    }
    return newArr.join('');
}

const indexedCapitalizer1 = (str, arr) => {
    let newString = "";
    for(let i=0; i<str.length; i++){
        for(var j=0; j<arr.length; j++){
            if(i === arr[j]){
                newString += str[i].toUpperCase();
                break;
            }
        }
        if(i !== arr[j])
            newString += str[i];      
    }
    return newString;
}

console.log(indexedCapitalizer1(strGiven,arrGiven))
console.log(indexedCapitalizer1(strGiven,arrGiven));  
//"abCdEFgh"

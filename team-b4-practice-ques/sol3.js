// Question
// You have given an lower case string and an array of numbers, capitalize the characters that lie on the indices determined by the numbers in the array.


const strGiven = "abcdefgh";
const arrGiven = [2,4,5];

const indexedCapitalizer = (str, arr) => {
    let newString = "";
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<str.length; j++){
            if(arr[i] === j){
                newString+=str[j].toUpperCase();
            }else{
                newString+=str[j].toLowerCase();
            }
            
        }
    }
    return newString;
}

console.log(indexedCapitalizer(strGiven,arrGiven));   // abCdefghabcdEfghabcdeFgh
//"abCdEFgh"

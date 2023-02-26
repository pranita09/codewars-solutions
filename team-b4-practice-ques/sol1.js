// Question
// You will be given an array of numbers and a target number, two numbers from the given array add up to the target number. find the indices of the two numbers and return them as a string.

const arrGiven = [1,3,5,6,8];
const targetNumber = [11];

const twoSum = (arrName, target) => {
    for(let i=0; i<arrName.length; i++){
        for(let j=(i+1); j<arrName.length; j++){
            if(arrName[i]+arrName[j] === target[0]){
                return `${i}th and ${j}th index add up to ${target[0]}`;
            }
        }
    }
    return `No such pair exist.`;
}

console.log(twoSum(arrGiven, targetNumber));  // 1th and 4th index add up to 11
// "3rd and 4th index add up to 11"
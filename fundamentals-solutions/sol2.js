//Question 01: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative? 

const makeNegative = num => num > 0 ? -num : num;

//alternate
const makeNegative2 = num => -Math.abs(num);


//Question 02: Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

const getGrade = (s1, s2, s3) => {
    const avgScore = (s1+s2+s3)/3;
    return avgScore>=90 ? "A" : avgScore>=80 ? "B" : avgScore>=70 ? "C" : avgScore>=60 ? "D" : "F";
}


//Question 03: Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation. The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.

const setAlarm = (employed, vacation) => employed===true && vacation===false ? true : false;

// alternate
const setAlarm2 = (employed, vacation) => employed && !vacation;
// console.log(setAlarm2(true, false));


//Question 04: Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

const min = array => {
    let minValue = array[0]
    for(let i=0; i<=array.length-1; i++){
      if(minValue>array[i]){
        minValue = array[i];
      }
    } 
    return minValue;
  }
  
  const max = array => {
    let maxValue = array[0];
    for(let i=0; i<=array.length-1; i++){
      if(maxValue < array[i]){
        maxValue = array[i];
      }
    }
    return maxValue;
  }

// console.log(min([-3, 90, 12, 45, -9, 0]));
// console.log(max([-3, 90, 12, 45, -9, 0]));

// alternate: using array destructuring

const min2 = array => Math.min(...array);
const max2 = array => Math.max(...array);
// console.log(min2([-3, 90, 12, 45, -9, 0]));
// console.log(max2([-3, 90, 12, 45, -9, 0]));

// alternate

const min3 = array => Math.min.apply(null, array);
const max3 = array => Math.max.apply(null, array);
// console.log(min3([-3, 90, 12, 45, -9, 0]));
// console.log(max3([-3, 90, 12, 45, -9, 0]));


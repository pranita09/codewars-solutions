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
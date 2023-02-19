//Question 01: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative? 

const makeNegative = num => num > 0 ? -num : num;

//alternate
const makeNegative2 = num => -Math.abs(num);


//Question 02: 
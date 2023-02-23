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


// Question 02: Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b. Note: a and b are not ordered!

const getSum = (a, b) => {
let sum = 0;
  if(a<b){
    for(let i=a; i<=b; i++){
      sum += i;
    }
    return sum;
  }else{
    for(let i=b; i<=a; i++){
      sum+= i;
    }
    return sum;
  }  
}

const getSum1 = (a, b) => {
    let sum = 0;
    let bigger = a>b ? a : b;
    let smaller = a<b ? a : b;
    sum = (bigger+smaller)*(bigger-smaller+1)/2;
    return sum;
}

// console.log(getSum1(12, 2));



// Question 03: Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case. (In this case, all triangles must have surface greater than 0 to be accepted).

const isTriangle = (a, b, c) => a + b > c && a + c > b && c + b > a;
console.log(isTriangle(10, -2, 10))

// Question 04: 
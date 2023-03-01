// Question 01: Very simple, given an integer or a floating-point number, find its opposite.

const opposite = number => -number;

// console.log(opposite(234));
// console.log(opposite(-987));



// Question 02: Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

const repeatString1 = (n, s) => n>0 ? s.repeat(n) : "";

const repeatString = (n, s) => {
    let repeatedString = '';
    while(n>0){
        repeatedString += s;
        n--;
    }
    return repeatedString;
}

// console.log(repeatString(5, "Hello"));



// Question 03: Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1square + 2square + 3square = 9

const sumOfSquares = arr => {
    let sum = 0;
    let arrayofSquares = [];
    for(let i=0; i<arr.length; i++){
        arrayofSquares += arr[i]*arr[i];
    }
    console.log(arrayofSquares);
    for(let i=0; i<arrayofSquares.length; i++){
        sum = sum + parseInt(arrayofSquares[i]);
    }
    return (sum);
}

const sumOfSquares1 = arr => {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += Math.pow(arr[i], 2);
    }
    return sum;
}

// console.log(sumOfSquares1([1,2,2]));


// Question 04:
// Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed. For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
    const vowels = ['a','e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let strWithoutVowels = "";
    for(let i=0; i<str.length; i++){
      if(!vowels.includes(str[i])){
        strWithoutVowels += str[i];
      }
    }
    return strWithoutVowels;
  }

// console.log(disemvowel("This website is for losers LOL!"));



// Question 05:


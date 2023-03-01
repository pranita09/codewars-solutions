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
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash1 (words) {
    let str = words.join(" ");
     return str;
  };

const smash = words => words.join(" ");

// console.log(smash(["This", "is", "your", "life.", "Hare", "Krishna", "!"]));



// Question 06:
// Given an integral number, determine if it's a square number

var isSquare = function(n){
    if(n>=0){
      let sr = Math.sqrt(n);
      if(sr*sr === n)
        return true;
      return false;
    }
    return false;
  }

const isSquare1 = n => {
    if(n>=0){
        for(let i=0; i*i<=n; i++){
        if(n%i === 0 && Math.floor(n/i) === i)
          return true;
        return false;
        }
    }
    return false;
}

const isSquare2 = n => Math.sqrt(n) % 1 === 0

console.log(isSquare2(0));


// Question 07:
// Write function bmi that calculates body mass index (bmi = weight / height2).

function bmi(weight, height) {
    let bmi = weight/height**2;
    if(bmi<=18.5)
      return "Underweight";
    else if(bmi<=25.0)
      return "Normal";
    else if(bmi<=30.0)
      return "Overweight";
    else 
      return "Obese";
  }

  function bmi1(weight, height) {
    const $ = weight / height**2;
    return $ <= 18.5 ? 'Underweight' : $ <= 25.0 ? 'Normal' : $ <= 30.0 ? 'Overweight' : 'Obese';
  }

//   console.log(bmi1())

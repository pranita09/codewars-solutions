// Question 01 - Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages. Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

const paperwork = (n, m) => (n<0 || m<0) ? 0 : n*m;


// Question 02 - Write a function which converts the input string to uppercase.

const makeUpperCase = str => str.toUpperCase();


// Question 03 - This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = number => number%2==0 ? number*8 : number*9;


// Question 04 - Create a function with two arguments that will return an array of the first n multiples of x. Assume both the given number and the number of times to count will be positive numbers greater than 0. Return the results as an array or list ( depending on language ).

const countBy = (x, n) => {
  let z = [];
  for(let i=1; i<=n; i++){
    z.push(x*[i]);
  }
  return z;
}


// Question 05 - Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T'). Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U'). Create a function which translates a given DNA string into RNA. The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

const DNAtoRNA = dna => dna.replaceAll("T", "U");



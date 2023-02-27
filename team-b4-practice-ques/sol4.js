// Question
// Your are giving a sring that has uppercase and lowercase characters, change the string completely to upper or lower case, based on what would take the least amount of changes.

strOne = "onE";
strTwo = "OnE";
strThree = "MaYa";

const upperOrLower = str => {
    let newString = "";
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i]===str[i].toLowerCase()){
            count++;
        }else{
            count--;
        }
    }
    // console.log(lowerCount, upperCount);
    return count>0 ? str.toLowerCase() : str.toUpperCase();
}

console.log(upperOrLower(strOne));
//"one"
console.log(upperOrLower(strTwo));
//"ONE"
console.log(upperOrLower(strThree));
//"MAYA"
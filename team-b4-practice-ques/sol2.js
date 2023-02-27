// Question
// You are given a string that contains consecutive words that are same, return a string with all the repeating consecutive words removed.


const strInput = "hey hey hey you you have a a nice day day hey"

const removeRepeatingWords = strInput => {
    let arrayOfWords = strInput.split(" ");
    console.log(arrayOfWords);
    for(let i=0; i<arrayOfWords.length; i++){
        if(arrayOfWords[i]===arrayOfWords[i+1]){
            arrayOfWords.splice(i, 1);
            i--;
        }
    }
    console.log(arrayOfWords);
    return arrayOfWords.join(" ");
}

console.log(removeRepeatingWords(strInput));
//"hey you have a nice day hey"
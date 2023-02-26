// Question
// Write a fuction that adds infinite number of passed arguments

const addInfinite = (...args) => {
    console.log(args);
    let sum = 0;
    for(let i=0; i<args.length; i++){
        sum += args[i];
    }
    return sum;
}

console.log(addInfinite(1, 2, 3));
// 6
console.log(addInfinite(10, 20, 30, 40, 50, 60));
// 210
//String Length

// function solve2 (...params){
//     let sum = params.reduce((a,b)=> a+ b.length, 0);
//     let avrg = Math.floor(sum / params.length);

//     return [sum, avrg]

// };


// console.log(
//     solve2('chocolate', 'ice cream', 'cake')
//     .join("\n")
// )

//	*Words Uppercase

function solve(str){

    return str.match(/\w+/gim).map(x=>x.toUpperCase()).join(", ");
}

console.log(
    solve('Hi, how are you?')
);

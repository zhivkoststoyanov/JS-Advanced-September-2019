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

//-------------------------------------------------------------------------
//	*Words Uppercase

// function solve(str){

//     return str.match(/\w+/gim).map(x=>x.toUpperCase()).join(", ");
// }

// console.log(
//     solve('Hi, how are you?')
// );

//Exercise
//Task 3 - Same Numbers

function myFunc(number) {
    let digits = number.toString().split('');
    let realDigits = digits.map(Number);
    //console.log(typeof(realDigits));
    let result = 0;
    let text = "";

    //console.log(realDigits);

    for (let i in realDigits) {
        if (realDigits[i] === realDigits[0]) {
            text = "true\n";
        } else {
            text = "false\n";
        }
        result += realDigits[i];
    }
    return console.log(text, result);

}


myFunc(33335);
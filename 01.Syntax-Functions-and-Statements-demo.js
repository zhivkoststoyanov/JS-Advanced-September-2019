//

function solve2 (...params){
    let sum = params.reduce((a,b)=> a+ b.length, 0);
    let avrg = Math.floor(sum / params.length);

    return [sum, avrg]

};


console.log(
    solve2('chocolate', 'ice cream', 'cake')
    .join("\n")
)

function solve(data){
const isNotEmptyString = x => x !=="";
const trimMyString = x => x.trim();
const parseIfNumber = x => Number(x) ? Math.floor(Number(x)* 100)/ 100:x



}

console.log(
    solve([
            '| Town | Latitude | Longitude |',
            '| Sofia | 42.696552 | 23.32601 |',
            '| Beijing | 39.913818 | 116.363625 |'
    ])
);

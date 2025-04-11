let stringData = ["abc", "acb", "ab", "a"];

const sorted = []
for (let i = 0; i < stringData.length; i++){
    sorted.push(stringData[i].split('').sort().join(''))
} 
sorted.sort()
console.log(sorted)

// let count = 0;
// const seen = {}

// for (let i = 0; i< sorted.length; i++){
//     for(let j = 0; j< sorted.length; j++){

//     }
// }
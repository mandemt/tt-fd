let count = []
data.forEach((filter, index) => {

    const variable = data[index].dier
    count.push(variable)
})
const counts = []
const geteldeArray = []

count.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
});
console.log(counts)
    const help = Object.keys(counts) 
    const hans = Object.values(counts)

help.forEach((x, index)=> {
    const num2 = hans[index];
    geteldeArray.push({
    "getal": x, "keer": num2
})
    
})
// console.log(x)
// })
// console.log(counts)

// counts.forEach (function (x,index) {
// geteldeArray.push({
// })
// });

console.log(geteldeArray)
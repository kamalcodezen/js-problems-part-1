
function evenAvg(num) {
    let evenNum = [];
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            evenNum.push(i);
        }
    }
    for (let j of evenNum) {
        sum += j;
    }
    let average = sum / evenNum.length;
    return average;
}

const nums = 50;
const evenNum = evenAvg(nums);
console.log(`This EVEN number average is ${evenNum}.`);



function oddAvg(odd) {
    let sum = 0;
    let count = 0;
    for (let n = 0; n <= odd; n++) {
        if (n % 2 !== 0) {
            sum += n;
            count++;
        }
    }
    let average = sum / count;
    return average;
}

const num = 55;
const oddNum = oddAvg(num);
console.log(`This ODD number average is ${oddNum}.`);
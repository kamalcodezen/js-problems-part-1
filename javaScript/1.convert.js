
function checkFeet(inch) {
    return searchFeet = inch / 12;
}
const inch_inch = 69;
const finalInch = checkFeet(inch_inch);
console.log(finalInch);


function checkFeetInch(inch) {
    let searchFeet = inch / 12;
    let feetInteger = Math.floor(searchFeet);
    let searchInch = inch % 12;
    let result = `${feetInteger}ft ${searchInch}inch`;
    return result;

}

const inch = 75;
const totalFeet = checkFeetInch(inch);
console.log(totalFeet);
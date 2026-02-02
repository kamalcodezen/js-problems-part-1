
function duplicateCheck(str) {
    let city = [];
    for (let val of str) {
        if (city.includes(val) === false) { //!city.includes(val);
            city.push(val);
        }
    }
    return city;
}


const cities = ["delhi", "mumbai", "delhi", "pune", "mumbai", "kolkata", "hyderabad", "lucknow", "pune"];

const newCities = duplicateCheck(cities);
console.log(`We are new city ${newCities}`);

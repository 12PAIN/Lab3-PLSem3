
function output(country, population){
    console.log("C: " + country + ", P: " + population);
}

let countries = ["Russia", "Japan", "China"];
let population = ["140M", "100M", "1.1B"];

for(let i = 0; i < countries.length; i++){
    output(countries[i], population[i]);
}

for(country of countries){
    output(country,)
}
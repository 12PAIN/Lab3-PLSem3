
function output(country, population){
    console.log("C: " + country + ", P: " + population);
}

let countries = ["Russia", "Japan", "China"];
let population = ["140M", "100M", "1.1B"];

for(let i = 0; i < countries.length; i++){
    output(countries[i], population[i]);
}

countries.forEach((element, index) => {
    output(element, population[index]);
});

//// Цикл for in предназначен для объектов вообще
//// да и два массива так запустить не получится, нам в любом случае нужен индекс для второго)
//// Если бы у нас был массив countries, где были бы объекты с названием и населением, то был бы for in
//// Код выводит сначала "Локальная переменная", затем "Глобальная переменная"
//// Происходит это, потому что в области "видимости" функции f() у нас переопределяется переменная variable
//// но в глобальном контексте она остаётся со значением "Глобальная переменная"


let variable = "Глобальная переменная";

function f() {
    let variable = "Локальная переменная";
    console.log(variable);
}

f();
console.log(variable);
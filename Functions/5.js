
function u(x,y,z){

    let value = Math.max(x,y) + Math.max(x+y, z)

    value /= Math.pow(Math.max(0.5, x+z), 2);

    return value;
}


let a = 1
let b = 2
let c = 3

console.log(u(a,b,c));
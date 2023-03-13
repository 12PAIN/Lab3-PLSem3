
function maxThreeNumbers(a, b, c){
    
    if(a >= b && a >= c) return a;

    if(b >= a && b >= c) return b;

    if(c >= a && c >= b) return c;


}

console.log(maxThreeNumbers(3,2,1));
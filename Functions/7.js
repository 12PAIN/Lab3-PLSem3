

function sinCont(n){

    if(n == 1) return 1;
    else{

        let value = 0;

        for(let i = 2; i <= n; i++){
            value = value + sinCont(i-1);
        }

        return Math.sin(value);
    }

}

console.log(sinCont(7));
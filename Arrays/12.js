
function task(array){

    array.forEach((element, index) => {
        if(element > 0 && index % 2 != 0){
            array[index] = element*3;
            return;
        } 
        if(element < 0 && index % 2 == 0){
            array[index] = element/3;
            return;
        } 
    });

    return array;
}

let arr = [-1, 2, -3, -4, 5];

console.log(task(arr));
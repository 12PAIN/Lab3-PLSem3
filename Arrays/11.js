

function task(array){

    let prevValue;
    for(let i = 0; i < array.length; i++){

        if(i == 0){
            prevValue = array[i];
            continue;
        }

        if(array[i] <= prevValue){
            prevValue = array[i];
            continue;
        }
        else{
            console.log(i + " Value: " + array[i]);
            return;
        }

    }

    console.log(array.reverse().join(" "));

}

let arr = [5, 4, 3, 2, 1];
let arr1 = [9, 8, 7, 8, 2];

task(arr);
task(arr1);
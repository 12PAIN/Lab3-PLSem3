let arr = [];

function swapMaxMin(array){

    let maxIndex;
    let minIndex;

    let min = 200000000;
    let max = -10000000;

    array.forEach((element, index) => {

        if(element >= max){
            max = element;
            maxIndex = index;
        }

        if(element <= min){
            min = element;
            minIndex = index;
        }

    });

    
    console.log(max + " index: "+ maxIndex);
    console.log(min + " index: "+ minIndex);
    console.log(arr);

    if(maxIndex != minIndex){
        let tmp = array[maxIndex];

        array[maxIndex] = array[minIndex];
        array[minIndex] = tmp;
    }

    console.log("New array: ");
    console.log(arr);
}

for(let i = 0; i < 10; i++) arr.push(Math.round(Math.random()*1000));

swapMaxMin(arr);




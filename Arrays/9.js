
function median(array){
    if(array.length % 2 == 0){
        return ((array[Math.floor(array.length/2)])+(array[Math.ceil(array.length/2)]))/2;
    }else{
        return array[Math.ceil(array.length/2)];
    }
}

let arr1 = [1, 2, 5, 4, 6];
let arr2 = [8, 2, 5, 9, 5];

arr1.sort();
arr2.sort();


console.log(median(arr1));
console.log(median(arr2));
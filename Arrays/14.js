
function task(matrix){

    let maxSum = 0;
    let minProizv = 1;
    
    for(let i = 0; i < matrix.length; i++){
        let tmpMax = -9999999;
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] >= tmpMax){
                tmpMax = matrix[i][j];
            }
        }
        maxSum += tmpMax;
    }

    console.log("MaxSum: " + maxSum);

    for(let i = 0; i < matrix[0].length; i++){
        let tmpMin = 9999999;
        for(let j = 0; j < matrix.length; j++){
            if(matrix[j][i] <= tmpMin){
                tmpMin = matrix[j][i];
            }
        }
        minProizv *= tmpMin;
    }

    console.log("MinProizv: " + minProizv);
}

let matrix = [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 1],
    [3, 4, 5, 1, 2],
    [4, 5, 1, 2, 3],
    [5, 1, 2, 3, 4]
];

task(matrix);
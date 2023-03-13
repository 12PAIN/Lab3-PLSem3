
function showFromInterval(matrix, leftBorder, rightBorder){

    for(row of matrix){
        for(value of row){
            if(value >= leftBorder && value <= rightBorder) console.log(value);
        }
    }

}

let matrix = [
    [0, 1, 2, 3 , 4],
    [-100, 100, 100, 100 , 100],
    [-100, 100, 100, 100, 100],
    [-100, 100, 100, 100 , 100],
    [-100, 100, 100, 100 , 100]
];

showFromInterval(matrix, -5, 7);
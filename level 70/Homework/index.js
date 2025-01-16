// 1) შექმენით ფუნქცია რომელიც აბრუნებს 2დ მასივს (ზრდადი რიცხვების) სვეტების დს რიგების მიხედვით, მაგ: func(2,2) --> [ [1,2], [3,4] ]
// 2) შექმენით ფუნქცია რომელსაც გადაეცემა nxn მატრიცა და დაპრინტავს მის 1) სვეტებს, 2) რიგებს, 3) დიაგონალებს


function getTo2dArray(row, column){
    let res = []
    let currentNum = 1
    for(let i = 0; i < row; i++){
        let row1 = []
        for(let j = 0; j < column; j++){
            row1.push(currentNum)
            currentNum++
        }
        res.push(row1)
    }
    
    return res
}

console.log(getTo2dArray(3,5))





function processMatrix(matrix) {
    const n = matrix.length;

    console.log("Rows:");
    matrix.forEach(row => console.log(row));

    console.log("Columns:");
    for (let col = 0; col < n; col++) {
        const column = [];
        for (let row = 0; row < n; row++) {
            column.push(matrix[row][col]);
        }
        console.log(column);
    }

    console.log("Diagonals:");
    const mainDiagonal = [];
    const secondaryDiagonal = [];
    for (let i = 0; i < n; i++) {
        mainDiagonal.push(matrix[i][i]);
        secondaryDiagonal.push(matrix[i][n - i - 1]);
    }
    console.log("Main Diagonal:", mainDiagonal);
    console.log("Secondary Diagonal:", secondaryDiagonal);
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

processMatrix(matrix);


function func(matrix1){
    console.log("row:")
    for(let i = 0; i < matrix1.length; i++){
        console.log(matrix1[i])
    }
    console.log("columns:")
    for(let i = 0; i < matrix1.length; i++){
        let col = []
        for(let j = 0; j < matrix1.length; j++){
            col.push(matrix1[j][i])
        }
        console.log(col)
    }
    console.log("diagonals:")
    let diagonal1 = []
    let diagonal2 = []
    for(let i = 0; i < matrix1.length; i++){
        diagonal1.push(matrix1[i][i])
        diagonal2.push(matrix1[i][matrix1.length - 1 - i])
    }
    console.log(diagonal1)
    console.log(diagonal2)
    
    
}

let arr1 = [
           [1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]
    ]

console.log(func(arr1))
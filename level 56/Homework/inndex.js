

let num = [2,5,4,7,8]
console.log(num[2]);
console.log(num[4]);



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
}





function func(a) {
    let res = [];
    for (let i = a.length - 1; i >= 0; i--) {
        res.push(a[i]);
    }
    return res;
}

let arr1 = [1, 2, 3];
console.log(func(arr1));



function func1(b) {
    let lastIndex = b.length - 1;
    [b[0], b[lastIndex]] = [b[lastIndex], b[0]];

    return b;
}

let arr2 = [1, 2, 3, 4];
console.log(func1(arr2));
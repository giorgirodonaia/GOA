function Func() {
    let num = prompt("Enter a number:");
    if (!num || isNaN(num)) return;

    let result = "";
    let i = 1;
    let first = +num[0] + 1;
    result += first;

    while (i < num.length) {
        result += "0";
        i++;
    }

    console.log(result);
}

Func();
function func(matrix) {
    let arr = []
    for (let i; matrix.length(); i++){
        for(let j; i[matrix]; j++) {
            if(j % 2 === 0){
                arr.push(j)
            }
        }
    }
    return arr
}

func([[1,2,3,4]])
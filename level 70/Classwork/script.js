let animal = [
    ['lion', '16', '180', 'true'],
    ['hippo', '23', '400', 'false'],
    ['wolf', '10', '45', 'true']
];
    
    
function func(animalArr){
    for(let i = 0; i < animalArr.length; i++){
        let res = ''
        for(let j = 0; j < animalArr[i].length; j++){
            res += animalArr[i][j]
            if(j < animalArr[i].length - 1){
                res += " - "
            }
        }
        console.log(res)
    }
}

func(animal)
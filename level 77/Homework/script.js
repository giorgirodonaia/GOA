function createObj(keys, values){
    if((keys.length != values.length) || (keys.length == 0 || values.length == 0)){
        console.log("Error")
        return;
    }
    
    let obj  = {}
    
    for(let i = 0; i < keys.length; i++){
       obj[keys[i]] = values[i]
    }
    
    return obj
}


let obj1 = createObj(["a", "b", "c"], [1,2,3])
console.log(obj1)
function myKeys(object){
    let i = 0
    const array = []
    for(let key in object){
        array[i] = key
        i++;
    } return array
}
 
function myValues(object){
    let i = 0
    const valueArray = []
    for(let key in object){
        valueArray[i] = object[key]
        i++;
    } return valueArray
}


function isArray(object){
    let i = 0
    while(i in object){
        i++
    }
    return i > 0
     }


function objectConverter(collection){
    let array= undefined
    if (isArray(collection) === false){
        array = myValues(collection);
    } else{array = collection};

    return array
}
function mySize(collection){
    let array = objectConverter(collection);
    let length = 0
    for(let i in array){
        length++
        
    }return(length)
}

function myWriter(element){
    console.log(element)
}

function myEach(collection, callback){
     const processArray = array => {
        for(let i = 0; i < mySize(array); i++) {
            callback(array[i])
            
        }
    }
     if (isArray(collection) === false){
        let array = myValues(collection);
        
        processArray(array)    
    } else{processArray(collection)};
    return collection
}

function myPush(array, value){
    array[mySize(array)] = value
        return array
}


//map starts here//

const iterateArray = (array, callback) => {
    let newArray = []
    for(let i = 0; i < mySize(array); i++) {
       newArray = myPush(newArray, callback(array[i]))}
       return newArray
        
    }
function objectConverter(collection){
let array
if (isArray(collection) === false){
    array = myValues(collection);    
} else{array = collection}
return array}


function tripler(i){
    return i*3
}
function myMap(collection, callback){
    let array = objectConverter(collection);
    const newArray = iterateArray(array, callback)
    return newArray
    }
    
//start reduce//

function myReduce(collection, callback, acc = undefined){
    let array = objectConverter(collection);
    let a = acc
    if(a === undefined){
        a = array[0];
        for(let i = 1; i < mySize(array); i++) {
        a = (callback(a, array[i]))
    }}
    else {for(let i = 0; i < mySize(array); i++) {
        a = (callback(a, array[i]))
    }} 
    return a
}
    
//start find//

function myFind(collection, predicate){
    let array = objectConverter(collection);
    let result = undefined
    for(let i = 0; i < mySize(array); i++){
        if(predicate(array[i]) === true){
        result = array[i]
        return result
    }}
    if(result !== undefined){    
    } return result 
}


//start filter//

function myFilter(collection, predicate){
    let array = objectConverter(collection);
    let resultArray = []
    for(let i = 0; i < mySize(array); i++)
        if(predicate(array[i]) === true){
            myPush(resultArray, array[i])
    }
    return resultArray
}


// start first//

function myFirst(array, n = 1){
    const newArray = []
    if(n === 1){
            return array[0]}
    else {
        for(let i = 0; i < n; i++){
        newArray[i] = array[i];
        }
    } return newArray
}

//start last// 
function myLast(array, n = 1){
    const newArray = []
    let last = (mySize(array) - 1)
    if(n === 1){   
        return array[last]}
    else {
        for(let i = 0; i < n; i++){
        newArray[n -1 - i] = array[(last - i)];
        }
    }
    return newArray
}




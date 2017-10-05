function repeat(str, num){
    if(num === 0){
        return "";
    } else {
        return str + repeat(str, num-1);        
    }
}

repeat("hello ", 3);

function forEach(arr, func){
    if(arr.length){
        func(arr[0]);
        forEach(arr.slice(1), func);
    }
}

forEach([1, 2, 3], console.log);

function deepForEach(arr, func){
    for (var i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            deepForEach(arr[i], func);
        } else {
            func(arr[i]);
        }
    }
}

deepForEach([1, [2, 3], [4, 5, 6]], console.log);

function deepForEachNoLoops(arr, func){
    if(arr.length){
        if(Array.isArray(arr[0])){
            deepForEachNoLoops(arr[0], func);
        } else {
            func(arr[0]);
        }
        deepForEachNoLoops(arr.slice(1), func);
    }
}

deepForEachNoLoops([1, [2, 3], [4, 5, 6]], console.log);

function countElements(arr){
    if(arr.length){
        return 1 + countElements(arr.slice(1))
    } else {
        return 0;
    }
}

countElements([1, 2, 3]);
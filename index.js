// Linear Search Algorithm

function linearSearch(arr, key){
    for(i = 0; i < arr.length; i++){
        if(arr[i] == key){
            return i
        }
    }

    return 'Index not found'
}

console.log(linearSearch([1, 2, 3, 4], 4))
console.log(linearSearch([1, 2, 3, 4], 5))

// Binary Search algorithm
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

function recursiveFunction(arr, key){
  let left = 0;
  let right = arr.length;

  while(left <= right){
    const mid = Math.floor((left+right)/2)

    if(arr[mid] === key){
      return mid
    } else if(arr[mid] < key){
      left = mid+1
    } else{
      right = mid - 1
    }
  }

  return 'Value not found'
}

console.log(recursiveFunction([1, 2, 3, 4, 5, 6, 7], 7))
console.log(recursiveFunction([1, 2, 3, 4, 5, 6, 7], 8))
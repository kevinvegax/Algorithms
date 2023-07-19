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

export default recursiveFunction;
// Linear Search Algorithm

function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == key){
        return i
      }
    }
  
    return 'Index not found'
  }
export default linearSearch;
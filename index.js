function findMinAndRemove(array){
  let newMin = array[0]
  let minIndex = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] < newMin) {
      newMin = array[i]
    }
  }
  array.splice(minIndex, 1)
  return newMin
}

function insertionSort(array){

}

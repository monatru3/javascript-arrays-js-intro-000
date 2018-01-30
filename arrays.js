var chocolateBars= ["snickers", "hundred grand", "kit kat", "skittles"];

function addElementToBeginningOfArray(array, element) {
array[0]=element;
return array
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

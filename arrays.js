var chocolateBars= ["snickers", "hundred grand", "kit kat", "skittles"];

function addElementToBeginningOfArray(array, element) {
var newarray=array
return newarray.unshift(element)
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

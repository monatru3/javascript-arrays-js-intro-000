function addElementToBeginningOfArray(origArray, element) {
 origArray=[]
 origArray[...element,]


}

function destructivelyAddElementToBeginningOfArray(origArray, element) {
  origArray=[];
  return origArray.unshift(element);
}

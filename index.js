const feetInBlock = 264
const hq = 42

// Code your solution in this file!

// someValue = 43rd Street
// hq = 42nd Street
function distanceFromHqInBlocks(currentBlock) {
  // 43 42
  
  if (currentBlock > hq) {
    //  43   42
      return currentBlock - hq
  } else  {
    // current   hq
    // 34   42
      return hq - currentBlock
  }
  
  // 34 42
}
   
   
 function distanceFromHqInFeet(currentBlock)  {
  // figure out how many blocks away it is
  // convert that into feet
  
   if (currentBlock > hq) {
    //  43   42
      return currentBlock - hq
  } else  {
    // current   hq
    // 34   42
      return hq - currentBlock
  }
  
  // 34 42
}
 }
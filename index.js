const block = 264
const hq = 42

// Code your solution in this file!

// someValue = 43rd Street
// 
function distanceFromHqInBlocks(currentBlock) {
  // 43 42
  // 34 42
  
  if (currentBlock > hq) {
    return currentBlock - hq
  } else {
      return hq - currentBlock
  }

  return currentBlock - hq
}

function distanceFromHqInFeet (currentBlock) {
  // figure out how many blocks away it isNaN
   if (currentBlock > hq) {
    return currentBlock - hq
  } else {
      return hq - currentBlock
  }
  // convert that into feet
  
  return 
}



function calculatesFarePrice(startingBlock, destination) {
  // how far are they going? 
    const numnberOfBlocks - Math.abs(startingBlock - destinationBlock)
    const numberOfFeet = numnberOfBlocks * feetInBlock
    
    // first four hundred feet are free

    if(numberOfFeet <= 400) {
      return 0
      // if more than 400 and less than or equal to 2000
    } else if (numberOfFeet > 400 && numberOfFeet <= 2000) {
      return (numberOfFeet - 400) * 0.02
      // 25 dollars for distance over 2000
    } else if (numberOfFeet > 2000 && numberOfFeet <= 2500) {
        return 25
    } else {
      return 'cannot travel that far'
    } 
  
   
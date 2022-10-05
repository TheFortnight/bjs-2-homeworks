function compareArrays(arr1, arr2) {
  let result;
  if(arr1.length !== arr2.length){
    return result = false;
  }
    result = arr1.every((el,ind) => el === arr2[ind]);
  // Ваш код

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter((el) => el > 0)
  .filter((elem) => elem % 3 === 0)
  .map((e) => e * 10);
  return resultArr; // array
}

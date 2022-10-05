// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = +Infinity;
  max = -Infinity;
  sum = 0;

  for (let i=0; i<arr.length; i++){
    min = min > arr[i]? arr[i] : min;
    max = max < arr[i]? arr[i] : max;
    sum += arr[i];
  }
  avg = +(sum / arr.length).toFixed(2);
  // Ваш код

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i=0; i<arr.length; i++) {
    sum += arr[i];
  }
  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i=0; i<arrOfArr.length; i++) {
    calcSum = func(arrOfArr[i]) 
    max = max < calcSum? calcSum : max;
  }
  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let highest = -Infinity;
  let lowest = +Infinity;
  //let result;
  for (let i=0; i<arr.length; i++) {
    highest = highest < arr[i]? arr[i] : highest;
    lowest = lowest > arr[i]? arr[i] : lowest;
  }
  return +(highest - lowest);
}

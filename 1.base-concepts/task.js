"use strict"
function solveEquation(a,b,c) {
  let discr = b**2-4*a*c;
  let arr = new Array();
  if (discr > 0) {
    arr.push((-b + Math.sqrt(discr))/(2*a));
    arr.push((-b - Math.sqrt(discr))/(2*a));
  }
  else if (discr == 0) {
    arr.push(-b/(2*a));
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
   if(isNaN(percent)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
   }
   else if(isNaN(contribution)){
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
   }
   else if(isNaN(amount)){
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
   }
  let credAmount = amount - contribution;
  let period = date - new Date();
  //console.log(period);
  let denominator = 1000 * 60 * 60 * 24 * 30;
  let month = Math.floor(period / denominator);
    if(month <= 1) {
    alert("минимальный период кредита - 1 мес. Укажите правильную дату");
    return;
  }
    
  
  percent = percent / 100;
  let P = percent / 12;
  let payment = credAmount * (P + (P / (((1 + P)**month) - 1)));
  totalAmount = payment * month;
  totalAmount = +(totalAmount).toFixed(2);
  console.log(totalAmount + typeof(totalAmount));
  


  // код для задачи №2 писать здесь

  return totalAmount;
}

"use strict"
function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = solveEquation(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+JSON.stringify(result);
}

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = new Date(window.date.value);

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    //result = (result).toFixed(2);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let credAmount = amount - contribution;
  let period = date - new Date();
  //console.log(period);
  let denominator = 1000 * 60 * 60 * 24 * 30;
  let month = Math.floor(period / denominator);
    if(month <= 1) {
    alert("минимальный период кредита - 1 мес. Укажите правильную дату");
    return;
  }
    else {
  percent = percent / 100;
  let P = percent / 12;
  let payment = credAmount * (P + (P / (((1 + P)**month) - 1)));
  totalAmount = payment * month;
  totalAmount = (totalAmount).toFixed(2);
  console.log(totalAmount + typeof(totalAmount));
    }


  // код для задачи №2 писать здесь

  return totalAmount;
}

window.onload = function(){
  document.getElementById("calculate").addEventListener("click", myFunction);
}


function myFunction() {
    var x = getHourCost();
    document.getElementById("result").innerHTML = "That will cost you " + x + " of your time.";
}

function getPayPeriod(){
  var elements = document.getElementsByName("pay_period");
  for (var i = 0; i < elements.length; ++i){
    if (elements[i].checked) {
      return elements[i].value;
    }
  }
}

function getWorkHours() {
  var work_hours = document.getElementById("work_hours").value;
  return work_hours;
}

function getPay() {
  var pay = document.getElementById("pay").value;
  return pay;
}

function getCost() {
  var cost = document.getElementById("cost").value;
  return cost;
}

function getRate() {
  var rate = 0;
  var pay_period = getPayPeriod();
  var work_hours = getWorkHours();
  var monthly_work_hours = work_hours * 4;
  var pay = getPay();
  if (pay_period == "monthly") {
    rate = pay / monthly_work_hours;
    return rate;
  }
  else {
    rate = (pay * 2) / monthly_work_hours;
    return rate;
  }
}

function getHourCost() {
  rate = getRate();
  var cost = getCost();
  var hourCost = cost / rate;
  return hourCost;
}

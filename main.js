// 変数を宣言

let display = document.getElementById("monitor");
let number = "";
let result = 0;


// 関数を定義

function calculate() {
  result = eval(number);
  return result;
}



// JQueryでDOMを操作

$(document).ready(function(){
  
  // [1]を押すと...
  $("#number1").click(function(){
    number += "1";
    display.textContent = number;
  });
  
  // [2]を押すと...
  $("#number2").click(function(){
    number += "2";
    display.textContent = number;
  });
  
  // [3]を押すと...
  $("#number3").click(function(){
    number += "3";
    display.textContent = number;
  });

  // [4]を押すと...
  $("#number4").click(function(){
    number += "4";
    display.textContent = number;
  });
  
  // [5]を押すと...
  $("#number5").click(function(){
    number += "5";
    display.textContent = number;
  });
  
  // [6]を押すと...
  $("#number6").click(function(){
    number += "6";
    display.textContent = number;
  });
  
  // [7]を押すと...
  $("#number7").click(function(){
    number += "7";
    display.textContent = number;
  });
  
  // [8]を押すと...
  $("#number8").click(function(){
    number += "8";
    display.textContent = number;
  });
  
  // [9]を押すと...
  $("#number9").click(function(){
    number += "9";
    display.textContent = number;
  });
  
  // [0]を押すと...
  $("#number0").click(function(){
    if (number != "0" && number != "") {
      number += "0";
      display.textContent = number;
    }
  });
  
  // [00]を押すと...
  $("#number00").click(function(){
    if (number != "00" && number != "") {
      number += "00";
      display.textContent = number;
    }
  });
  
  // [.]を押すと...
  $("#point").click(function(){
    if (number == "") {
      number += "0.";
    } else {
      number += ".";
    }
    display.textContent = number;
  });
  
  // [+]を押すと...
  $("#addition").click(function(){
    number += "+";
    display.textContent = number;
  });
  
  // [-]を押すと...
  $("#subtraction").click(function(){
    number += "-";
    display.textContent = number;
  });
  
  // [*]を押すと...
  $("#multiplication").click(function(){
    number += "*";
    display.textContent = number;
  });
  
  // [/]を押すと...
  $("#division").click(function(){
    number += "/";
    display.textContent = number;
  });
  
  // [=]を押すと...
  $("#equal").click(function(){
    display.textContent = calculate();
  });
  
  // [AC]を押すと...
  $("#allclear").click(function(){
    number = "";
    result = 0;
    display.textContent = "0";
  });
});
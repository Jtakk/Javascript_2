// 変数を宣言

let display = document.getElementById("monitor");
let number = "";
let result = 0;
let state = "start";    // 入力状態のフラグ
let mode = "";          // 整数or小数のフラグ


// 関数を定義

function calculate() {
  result = eval(number);
  return result;
}



// JQueryでDOMを操作

$(document).ready(function(){
  
  // [数字、算術演算子、小数点]を押すと...
  $(".nap").click(function(){
    number += this.textContent;
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
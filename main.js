// 変数を宣言

let display = document.getElementById("monitor");    // 表示画面を取得
let value = "";         // 計算式を代入
let result = 0;         // 計算結果を代入
let state = "start";    // 入力状態のフラグ     | start   | numeric | arithmetic | finish |
let mode = "integer";   // 整数or小数のフラグ   | integer | float   |
let banNumber = "off";  // 数字入力可否のフラグ | off     | on     |

/* 各フラグの補足説明
  1) 変数state
    < start > 何も入力していない状態。= 初期状態
      ・ *,/,=を入力できない。
      ・ 小数点(.)を入力すると 0. が入力される。
  
    < numeric > 数字を入力した直後の状態。
  
    < arithmetic > 算術演算子を入力した直後の状態。
      ・ +,-,*,/ を連続で入力すると最後に入力した算術演算子で上書きされる。
      ・ 小数点(.)を入力すると 0. が入力される。
      ・ = を入力すると直前の算術演算子が無効となる。
  
    < finish > 等号を入力した直後の状態。
      ・ +,-,*,/ を入力すると、計算結果を利用して続けて計算できる。
      ・ 数字を入力すると、表示がリセットされて入力した数字が表示される。
  
  
  2) 変数mode
    < integer > 整数入力中の状態。
      ・ 小数点(.)を入力できる。
  
    < float > 小数入力中の状態。
      ・ +,-,*,/,= が入力されるまでは小数点(.)を入力できない。
  
  
  3) 変数banNumber
    < on > 数字入力が禁止されている状態。
      ・ 数字を入力できない。
    
    < off > 数字入力ができる状態。
      ・ 数字を入力できる。
  
  (注) state === "start"において *,/ は入力できないが、一度+や-を入力すると、
      *,/で上書きできてしまって計算不可となる点は解消できていない。
          → 算術演算子でも +,- と *,/ をしっかり区別する必要がある。

*/



// 関数を定義

function calculate() {
  result = eval(value);
  return result;
}



/* { HTML class & id まとめ }

0以外の数字   → .number
0             → .zero
00            → .zero-w
+,-,*,/       → .symbol
.             → .point
=             → #equal
AC            → #allclear

*/



// JQueryでDOMを操作

$(document).ready(function(){
  
  
  // [0以外の数字]を押すと...
  $(".number").click(function(){
    if (banNumber === "on") {
      return;
    }
    if (state === "finish") {
      value = "";
      result = 0;
    }
    value += this.textContent;
    display.textContent = value;
    state = "numeric";
  });
  
  
  // [0]を押すと...
  $(".zero").click(function(){
    if (banNumber === "on") {
      return;
    }
    if (state !== "numeric") {
      banNumber = "on";
    }
    if (state === "finish") {
      value = "";
      result = 0;
    }
    value += this.textContent;
    display.textContent = value;
    state = "numeric";
  });
  
  
  // [00]を押すと...
  $(".zero-w").click(function(){
    if (banNumber === "on") {
      return;
    }
    if (state !== "numeric") {
      banNumber = "on";
    }
    if (state === "numeric") {
      value += this.textContent;
    } else if (state === "finish") {
      value = "0";
      result = 0;
    } else {
      value += "0";
    }
    display.textContent = value;
    state = "numeric";
  });
  
  
  // [算術演算子]を押すと...
  $(".symbol").click(function(){
    if (state === "start" && (this.textContent === "*" || this.textContent === "/")) {
      return;
    }
    if (state === "arithmetic") {
      value = value.slice(0,-1);
    }
    if (state === "finish") {
      value = result;
      result = 0;
    }
    value += this.textContent;
    display.textContent = value;
    state = "arithmetic";
    mode = "integer";
    banNumber = "off";
  });
  
  
  // [小数点]を押すと...
  $(".point").click(function(){
    if (mode === "float") {
      return;
    }
    if (state === "start" || state === "arithmetic") {
      value += "0";
    }
    if (state === "finish") {
      value = "0";
      result = 0;
    }
    value += this.textContent;
    display.textContent = value;
    state = "numeric";
    mode = "float";
    banNumber = "off";
  });
  
  
  // [=]を押すと...
  $("#equal").click(function(){
    if (state === "start") {
      return;
    }
    if (state === "arithmetic") {
      value = value.slice(0,-1);
    }
    display.textContent = calculate();
    state = "finish";
    mode = "integer";
    banNumber = "off";
  });
  
  
  // [AC]を押すと...
  $("#allclear").click(function(){
    value = "";
    result = 0;
    display.textContent = "0";
    state = "start";
    mode = "integer";
    banNumber = "off";
  });
  
});
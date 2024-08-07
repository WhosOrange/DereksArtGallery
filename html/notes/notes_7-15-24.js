// Script for Notes: 7/15/2024
/*** Navigation Shinanigans **/
var navArr = [
  "main-div",
  "to-do-div",
  "canvas-div",
  "good-things-div"
];

function funNav(input) {
  var tempSize = narArr.size;
  for (i = 0; i < tempSize; i++) { 
    if (navArr[i] == input) {
      document.getElementById(navArr[i]).style.display = "block";
    }
    else {
      document.getElementById(navArr[i]).style.display = "none";
    }
  }
};

/*** Some Global Set Up Here **/
var zaCan = document.getElementById("zaCan");
var zaCtx = zaCan.getContext("2d");

// TEST FUNCTION 0: Set up the Canvas
function funTEST0() {
  zaCan.width = 160;
  zaCan.height = 144;
  zaCtx.fillStyle = "#ffffff";
  zaCtx.fillRect(0, 0, 160, 144);
};

// TEST FUNCTION 0: Set up the Canvas
function funTEST1() {
  var inputColor = document.getElementById("color-string-box").value;
  zaCan.width = 160;
  zaCan.height = 144;
  zaCtx.fillStyle = inputColor;
  zaCtx.fillRect(0, 0, 160, 144);
  document.getElementById("color-string-box").placeholder = inputColor;
};

/** Functions to start by default **/
funTEST0();
funNav(0);



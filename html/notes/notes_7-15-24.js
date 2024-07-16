// Script for Notes: 7/15/2024

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

funTEST0();

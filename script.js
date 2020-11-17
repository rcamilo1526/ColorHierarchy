$(document).ready(function() {
  $('#multiscroll').multiscroll();
  $.fn.multiscroll.setScrollingSpeed(550);
  $.fn.multiscroll.setKeyboardScrolling(true);
});


console.log($("#colorMixer").css("background-color"));
console.log($("#redRange").attr("value"));


function updateColor() {
  let redValue = document.getElementById("redRange").value;
  let blueValue = document.getElementById("blueRange").value;
  let yellowValue = document.getElementById("yellowRange").value;

  $("#colorMixer").css("background-color", "rgb(" + redValue + "," + yellowValue + "," + blueValue + ")");
  console.log(document.getElementById("redRange").value);
  console.log(document.getElementById("blueRange").value);
  console.log(document.getElementById("yellowRange").value);
  console.log($("#colorMixer").css("background-color"));
}
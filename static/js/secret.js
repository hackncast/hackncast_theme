var secret = "65666567656666";
var input = "";
var timer;
var mode = false;
var showDatBoi = false;

// $(document).ready(function() {
//   $('#flash').hide();
// });

$(document).keyup(function(e) {
  // console.log(e.which);
  //alert(e.which);
  input += e.which;
  clearTimeout(timer);
  timer = setTimeout(function() {
    input = "";
  }, 500);
  check_input();
});

function check_input() {
  if(input == secret) {
    //the secret code
    console.log("Secret!!!")
    window.location.href = "http://flappyhighlander.hackncast.org";
  }
};

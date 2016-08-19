// 1)get data
// 2)modify the data
// 3)action/moment in time for modifictaion to occur

// get the value input >> inside the function get the button

function convert(){
  var c = document.querySelector("#c").value;
  var f = c * 9/5 +32;
  document.querySelector("h3").innerHTML = "Result: " + f+ "°"+ "F";
}

document.querySelector("#submit").onclick=convert;

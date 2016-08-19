// 1)get data
// 2)modify the data
// 3)action/moment in time for modifictaion to occur

// get the value input >> inside the function get the button -->
document.querySelector("#submit").onclick= convert;
// document.querySelector("#clear").onclick= clearAll;
// var result="";
// var scale="";

function convert(){
  var c = document.querySelector("#c").value;
  var f = document.querySelector("#f").value;


if(c === ""){
  result = (f-32)/(9/5);
  scale = "C";
}else{
  result = c*(9/5) +32;
  scale = "F";
  // document.querySelector("#f").value =result;
}
  document.querySelector("h3").innerHTML = "Results: "+ result + "°" + scale;
}
//
// function clearAll(){
//   c == " ";
//   f === " ";
// }


// change the backgroiund colour based on value of c




if(c <= 0){
  document.querySelector("body").style.backgroundColor. = "red";
}

// if (c === "blue") {
//   document.querySelector("body").style.backgroundColor  = "green";
//   document.querySelector("body").style.color = "white";

// if(c!=="" ||c !== null){
//   conversion= c * 9/5}
//   else(){
//     conversion
//   }
//
// if(c === "") {
//   c = conversion;
// }

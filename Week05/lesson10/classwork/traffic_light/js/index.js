//Implement the red light using jQuery. Don't forget to add the script tags.
// $("#stopButton").click("red")
//
// function red(){
//   console.log(David);
// }

$('#stopButton').click(illuminateRed);
$('#slowButton').click(illuminateYellow);
$('#goButton').click(illuminateGreen);


function illuminateRed() {
  $('#stopLight').css("backgroundColor","red");
}

function illuminateYellow() {
  $('#slowLight').css("backgroundColor","yellow");
}

function illuminateGreen() {
  $('#goLight').css("backgroundColor", "green");
}

// function clearLights() {
//   $('#stopLight').style.backgroundColor("black");
//   $('#slowLight').style.backgroundColor("black");
//   $('#goLight').style.backgroundColor("black");
// }

// pseudo code
// We want that the cash register adds up the amount entered into the entry box when submitted to appear on the register
// and add up to the total
//field
console.log("David");

function newTotal(banana){
  banana.preventDefault();
  var newNumber = $("#newEntry").val();
  console.log("newNumber");
  $("#total").html("$" + newNumber);
  // pseudocode make new line in the table with the newNumber
  $("#entries").append("<tr><td>"+newNumber+"</td></tr>");
}
$("#entry").submit(newTotal);

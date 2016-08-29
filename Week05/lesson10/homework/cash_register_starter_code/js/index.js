// pseudo code
// We want that the cash register adds up the amount entered into the entry box when submitted to appear on the register
// and add up to the total
//field
  var total = 0;

console.log("David");

function currencyFormat(pineapple){
   "$" + pineapple.toFixed(2);
}

function newTotal(banana){
  banana.preventDefault();
  var entry = $("#newEntry").val();
  entry = parseFloat(entry);
  entry = entry.toFixed(2);
  // pseudocode make new line in the table with the entry
  $("#entries").append("<tr><td></td><td>"+"$"+entry.toFixed(2)+"</td></tr>");
  total = total + entry;
console.log(total);
  $("#total").html("$"+total.toFixed(2));
  $("#newEntry").val("");
}
$("#entry").submit(newTotal);

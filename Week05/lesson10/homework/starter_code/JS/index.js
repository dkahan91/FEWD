

function findCity() {
  var city = document.querySelector("#city-type").value;

  // console.log(city)
    // e.preventDefault();
// pseudo code: take the city entry and pull out the right background picture for the page when updated.
// console.log(city);
  if(city === "london"){
    console.log("david")
  }
else{
    console.log("ben")
}
}


document.querySelector("#submit-btn").onclick = findCity;



// Questions:
// 1. Why does else not need to have curly braces around it?

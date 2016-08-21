

function findCity() {
  var cityUcaseLcase = document.querySelector("#city-type").value;
  var cityLcase = cityUcaseLcase.toLowerCase();
  var city = cityLcase.replace(/\s+/g, '');
  // console.log(city)
    // e.preventDefault();
// pseudo code: take the city entry and pull out the right background picture for the page when updated.
// console.log(city);
  if(city === "london"){
    document.querySelector("body").className="london";
  }
else if(city === "sydney"){
    document.querySelector("body").className="sydney";
}
else if(city === "austin"){
    document.querySelector("body").className="austin";
}
else if(city === "losangeles"){
    document.querySelector("body").className="la";
}
else if(city === "sf"){
    document.querySelector("body").className="sf";
}
else if(city === "nyc"){
    document.querySelector("body").className="nyc";
}
}


document.querySelector("#submit-btn").onclick = findCity;



// Questions:
// 1. Why does else not need to have curly braces around it?
// 2. backgroundColor doesn't work see commit 3.
// 3. Why do the variables have to be inside th function to work?

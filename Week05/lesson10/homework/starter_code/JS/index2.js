function findCity(val){
  val.preventDefault();
  console.log($("#city-type"));
  var city = $("#city-type").val();
  // city = city.trim();
  // city = city.toLowerCase();
  city = city.trim().toLowerCase();

if(city === "london"){
    $("body").attr("class","london");
  }
else if(city === "sydney"){
    $("body").attr("class", "sydney");
}
else if(city === "austin"){
    $("body").attr("class","austin");}
}

$("form").submit(findCity);


//
// function findCity() {
//   var city = $("#city-type").value;
  // var cityLcase = cityUcaseLcase.toLowerCase();
  // var cityspace = cityLcase.replace(/\s+/g, '');
  // var city = cityspace.trim();
  // console.log(city)
    // e.preventDefault();
// pseudo code: take the city entry and pull out the right background picture for the page when updated.
// console.log(city);
//   if(city === "london"){
//     $("body").className("london");
//   }
// else if(city === "sydney"){
//     $("body").className("sydney");
// }
// else if(city === "austin"){
//     $("body").className("austin");
// }
// else if(city === "losangeles"){
//     $("body").className("la");
// }
// else if(city === "la"){
//     $("body").className("la");
// }
// else if(city === "sf"){
//     $("body").className("sf");
// }
// else if(city === "sanfrancisco"){
//     $("body").className(sf);
// }
// else if(city === "nyc"){
//     $("body").className(nyc);
// }
// else if(city === "newyorkcity"){
//     $("body").className("nyc");
//   }
//   else if(city === "newyork"){
//       $("body").className("nyc");
//     }
// }






// Questions:
// 1. Why does else not need to have curly braces around it?
// 2. backgroundColor doesn't work see commit 3.
// 3. Why do the variables have to be inside the function to work?
// 4. How to take aout full stops if people use them? E.g. L.A.

console.log("david");
var animalTextArr = [
  "Horse: The horse (Equus ferus caballus) is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae.",
  "Pig:A pig is any of the animals in the genus Sus, within the Suidae family of even-toed ungulates. Pigs are highly social and intelligent animals.",
  "Rhino:A rhinoceros (meaning 'nose horn'), often abbreviated to rhino, is one of any five extant species of odd-toed ungulates in the family Rhinocerotidae, as well as any of the numerous extinct species. Two of these extant species are native to Africa and three to Southern Asia.",
  "Giraffe:The giraffe (Giraffa camelopardalis) is an African even-toed ungulate mammal, the tallest living terrestrial animal and the largest ruminant. Its species name refers to its camel-like shape and its leopard-like colouring.",
  "Gorillas:Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Africa. They are the largest living primates.",
  "Snake:Snakes are elongated, legless, carnivorous reptiles of the suborder Serpentes that can be distinguished from legless lizards by their lack of eyelids and external ears."
]

var animalPicArr =[
  '<img src="./Images/animals/animal1.jpg">',
  '<img src="./Images/animals/animal2.jpg">',
  '<img src="./Images/animals/animal3.jpg">',
  '<img src="./Images/animals/animal4.jpg">',
  '<img src="./Images/animals/animal5.jpg">',
  '<img src="./Images/animals/animal6.jpg">'
]


$("#next").click(nextOption);
var x = 0
$("#blurb-container").html(animalTextArr[x]);
$("#image-container").html(animalPicArr[x]);

function nextOption(puppy){
  $("#blurb-container").html(animalTextArr[x+1]);
  $("#image-container").html(animalPicArr[x+1]);
  x= x+1;
}

$("#previous").click(previousOption);

function previousOption(puppy){
  $("#blurb-container").html(animalTextArr[x-1]);
  $("#image-container").html(animalPicArr[x-1]);
  x=x-1;
}

// if(x===0){
//   $("#previous").html("");
// }else{
//   donothing}

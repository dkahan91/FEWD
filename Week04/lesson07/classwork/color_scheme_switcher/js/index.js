

function switchGray() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}

document.getElementById('grayButton').onclick = toggle;
document.getElementById('whiteButton').onclick = toggle;

function toggle(){
  document.querySelector("body").classList.toggle("dark");
}

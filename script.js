const mod = document.querySelector('#mode');

mod.addEventListener('click', () => {
    document.querySelector('.phone').classList.toggle('dark');
    document.querySelector('.bi-brightness-high-fill').classList.toggle('bi-moon');
}); 
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 
function myFunction() {
  var x = document.getElementById("myAudio").duration;
  document.getElementById("demo").innerHTML = x;
}
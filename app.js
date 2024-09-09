let A = document.querySelector("#A");
let B = document.querySelector("#S");
let D = document.querySelector("#D");
let F = document.querySelector("#F");
let G = document.querySelector("#G");
let H = document.querySelector("#H");
let J = document.querySelector("#J");
let K = document.querySelector("#K");
let L = document.querySelector("#L");
let P = document.querySelector("#P");
let Q = document.querySelector("#Q");
let W = document.querySelector("#W");
let O = document.querySelector("#O");
let R = document.querySelector("#R");

function play(a) {
    var audio = new Audio(`/piano-mp3/${a}.mp3`);
    console.log(audio)
    audio.play();
  }
  function play1() {
    var audio = new Audio("/piano-mp3/A1.mp3");
    audio.play();
  }
  function play2() {
    var audio = new Audio("/piano-mp3/A2.mp3");
    audio.play();
  }
  function play3() {
    var audio = new Audio("/piano-mp3/A3.mp3");
    audio.play();
  }
  function play4() {
    var audio = new Audio("/piano-mp3/A4.mp3");
    audio.play();
  }
  function play5() {
    var audio = new Audio("/piano-mp3/A5.mp3");
    audio.play();
  }
  function play6() {
    var audio = new Audio("/piano-mp3/A6.mp3");
    audio.play();
  }
  function play7() {
    var audio = new Audio("/piano-mp3/A7.mp3");
    audio.play();
  }
  function play8() {
    var audio = new Audio("/piano-mp3/Ab1.mp3");
    audio.play();
  }
  function play9() {
    var audio = new Audio("/piano-mp3/Ab2.mp3");
    audio.play();
  }
  function play10() {
    var audio = new Audio("/piano-mp3/Ab3.mp3");
    audio.play();
  }  function play11() {
    var audio = new Audio("/piano-mp3/Ab4.mp3");
    audio.play();
  }  function play12() {
    var audio = new Audio("/piano-mp3/Ab5.mp3");
    audio.play();
  }  function play13() {
    var audio = new Audio("/piano-mp3/Ab6.mp3");
    audio.play();
  }  function play14() {
    var audio = new Audio("/piano-mp3/Ab7.mp3");
    audio.play();
  }
A.addEventListener("click",()=>{
    play("A0");
})
S.addEventListener("click",()=>{
    play1();
})
D.addEventListener("click",()=>{
    play2();
})
F.addEventListener("click",()=>{
    play3();
})
G.addEventListener("click",()=>{
    play4();
})
H.addEventListener("click",()=>{
    play5();
})
J.addEventListener("click",()=>{
    play6();
})
K.addEventListener("click",()=>{
    play7();
})
L.addEventListener("click",()=>{
    play8();
})
P.addEventListener("click",()=>{
    play9();
})
O.addEventListener("click",()=>{
    play10();
})
Q.addEventListener("click",()=>{
    play11();
})
W.addEventListener("click",()=>{
    play12();
})
R.addEventListener("click",()=>{
    play13();
})




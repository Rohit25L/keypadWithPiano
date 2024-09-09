let A =document.querySelector("#A");
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
let R = document.getElementById("R");

  class pianoSong{
    method(a){
      var audio = new Audio(`/piano-mp3/${a}.mp3`);
      audio.play();
      audio.currentTime=0;
      console.log("rohit",a)
    }
  }
  let play1 =new pianoSong();

  document.addEventListener("keydown",()=>{
    if (event.keyCode==65){
    play1.method("F1");
    A.classList.add("new");
      setTimeout(() => {
        A.classList.remove("new");
      }, 200);
  }
  else if(event.keyCode==83){
    play1.method("G1");
    S.classList.add("new");
      setTimeout(() => {
        S.classList.remove("new");
      }, 200);
  }else if(event.keyCode==68){
    play1.method("A1");
    D.classList.add("new");
      setTimeout(() => {
        D.classList.remove("new");
      }, 200);
  }else if(event.keyCode==70){
    play1.method("B1");
    F.classList.add("new");
      setTimeout(() => {
        F.classList.remove("new");
      }, 200);
  }else if(event.keyCode==71){
    play1.method("C1");
    G.classList.add("new");
      setTimeout(() => {
        G.classList.remove("new");
      }, 200);
    }else if(event.keyCode==72){
    play1.method("D1");
    H.classList.add("new");
      setTimeout(() => {
        H.classList.remove("new");
      }, 200);
    }else if(event.keyCode==74){
      play1.method("E1");
      J.classList.add("new");
        setTimeout(() => {
          J.classList.remove("new");
        }, 200);
      }else if(event.keyCode==75){
        play1.method("F1");
        K.classList.add("new");
          setTimeout(() => {
            K.classList.remove("new");
          }, 200);
        }else if(event.keyCode==76){
          play1.method("A2");
          L.classList.add("new");
            setTimeout(() => {
              L.classList.remove("new");
            }, 200);
          }else if(event.keyCode==80){
            play1.method("B2");
            P.classList.add("new");
              setTimeout(() => {
                P.classList.remove("new");
              }, 200);
            }else if(event.keyCode==81){
              play1.method("C2");
              Q.classList.add("new");
                setTimeout(() => {
                  Q.classList.remove("new");
                }, 200);
              }else if(event.keyCode==82){
                play1.method("D2");
                R.classList.add("new");
                  setTimeout(() => {
                    R.classList.remove("new");
                  }, 200);
                }else if(event.keyCode==79){
                  play1.method("E2");
                  O.classList.add("new");
                    setTimeout(() => {
                      O.classList.remove("new");
                    }, 200);
                  }else if(event.keyCode==87){
                    play1.method("F2");
                    W.classList.add("new");
                      setTimeout(() => {
                        W.classList.remove("new");
                      }, 200);
                    }
  else{
    ()=>{
      var audio = new Audio();
      audio.pause();
    }
  }
  })

// A.addEventListener("keydown",()=>{
//     play("A0");
// })
// S.addEventListener("click",()=>{
//     play1();
// })
// D.addEventListener("click",()=>{
//     play2();
// })
// F.addEventListener("click",()=>{
//     play3();
// })
// G.addEventListener("click",()=>{
//     play4();
// })
// H.addEventListener("click",()=>{
//     play5();
// })
// J.addEventListener("click",()=>{
//     play6();
// })
// K.addEventListener("click",()=>{
//     play7();
// })
// L.addEventListener("click",()=>{
//     play8();
// })
// P.addEventListener("click",()=>{
//     play9();
// })
// O.addEventListener("click",()=>{
//     play10();
// })
// Q.addEventListener("click",()=>{
//     play11();
// })
// W.addEventListener("click",()=>{
//     play12();
// })
// R.addEventListener("click",()=>{
//     play15.method("A1");
// })




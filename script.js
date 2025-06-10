const texts = ["Student","Teacher","Doctor","Web designer"];

let count = 0 ;
let index = 0 ;
let letter = "";
let currentText = "" ;
let isDeleting = false ;

function typeEffect(){
  currentText = texts[count];
  if (isDeleting) {
    letter = currentText.slice(0,--index);
  }else{
    letter = currentText.slice(0,++index)
  }
  document.querySelector(".auto-type").textContent = letter ;
  let speed = isDeleting ? 50 : 150 ;
  if (!isDeleting && letter.length === currentText.length) {
    isDeleting = true ;
    speed = 1000;
  } else if (isDeleting && letter.length === 0) {
    isDeleting = false ;
    count++
    if(count === texts.length)
    count = 0 ;
    speed = 500 ;
  }
  setTimeout(typeEffect,speed)
}
typeEffect()
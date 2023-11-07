//code goes here...
var loader = document.getElementById('loader');
window.addEventListener("load",  function(){
   loader.style.display="none";
 });
 
   const TEXT=document.querySelector('h1 span');
const SPAN=[
  "with Inura","is an Art","will make future","has just begun" 
];
let characterIbdex=0;
 let WORDSINDEX=0;
 let isDELETING=false; 

 const TYPEEFFECT= ()=>{
  const WORD_CURRENT=SPAN[WORDSINDEX];
  const CHARACTER_CURRENT=WORD_CURRENT.substring(0,characterIbdex);
  TEXT.textContent=CHARACTER_CURRENT;
  TEXT.classList.add("stop_blinking");
 
 if(!isDELETING && characterIbdex < WORD_CURRENT.length){
characterIbdex++;
setTimeout(TYPEEFFECT,100);
 } else if(isDELETING && characterIbdex >0){
    characterIbdex--;
    setTimeout(TYPEEFFECT,100);

 }else{
    isDELETING= !isDELETING;
    TEXT.classList.remove("stop-blinking");
    WORDSINDEX=!isDELETING ? (WORDSINDEX +1) % SPAN.length: WORDSINDEX;
    setTimeout(TYPEEFFECT,1200);
 }

}

 TYPEEFFECT();
 




 

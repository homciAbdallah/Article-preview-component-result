const sociel=document.querySelector('.sociel')

const icon=document.querySelector('.icon')


let bolen=true
icon.addEventListener("click", function () {
  bolen=!bolen
  if(bolen){sociel.style.display='flex';}else{
    sociel.style.display='none';
  }
  
});







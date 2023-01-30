const input =document.getElementById("input")
const btn=document.getElementById("btn")
const answer =document.getElementById('answer')
let count=2
const boxx=document.querySelector(".box")
const game=document.querySelector('.guessing-game')

const Rnum =Math.round(Math.random() * 10) + 1
console.log(Rnum);
btn.addEventListener('click',() => {
    answer.classList.remove("hidden")
    const values =input.value
    const valueOfnum = Number(values)
    console.log(valueOfnum)
    if (count>0 && valueOfnum===Rnum){
        answer.innerHTML='Well Done :)'
        disable();
    }
    
   else if (count!=0)
    { answer.innerHTML='Try Again :]'
      boxx.innerHTML=boxx.innerHTML-1
      disable();
      count--;
       
}
else if (count==0) {
    answer.innerHTML='Game Over :]'
    boxx.innerHTML=boxx.innerHTML-1

    disable();
    game.style.border ='2px solid #ff0000'
    setTimeout(function(){location.reload()},4000)

}
})
function disable(){
    input.value="";
    input.classList.add('disable');
    btn.classList.add('disable');
}


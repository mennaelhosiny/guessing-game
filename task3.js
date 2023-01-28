let input =document.getElementById("input")
let btn=document.getElementById("btn")
let answer =document.getElementById('answer')
let count=3

let Rnum =Math.floor(Math.random() * 9) + 1
console.log(Rnum);
btn.addEventListener('click',() => {
    let values =input.value
    let valueOfnum = Number (values)
    console.log(valueOfnum)
    if (valueOfnum===Rnum)
     answer.innerHTML='Well Done :)'
    if (valueOfnum!==Rnum)
    { answer.innerHTML='Try Again :]'
         if (count>=0,count--)
         document.getElementById("boxx").innerHTML=count
}
if (count==0) {
    answer.innerHTML='Game Over :]'
    setTimeout(function(){location.reload()},4000)

}
})


let input =document.getElementById("input")
let btn=document.getElementById("btn")
let answer =document.getElementById('answer')

let Rnum =Math.floor(Math.random() * 9) + 1
console.log(Rnum);
btn.addEventListener('click',() => {
    let values =input.value
    let valueOfnum = Number (values)
    console.log(valueOfnum)
    if (valueOfnum===Rnum)
     answer.innerHTML='Well Done :)'
    else answer.innerHTML='Try Again :]'
})

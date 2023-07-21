const mybutton=document.getElementById("btn")
const myQuote=document.getElementById("myquote")
const myAuthor=document.getElementById("myauthor")
const copy=document.getElementById("copy")
const volume=document.getElementById("volume")

const mycontainer=document.getElementById("container")
const myloader=document.getElementById("loader")
function first(){
    mycontainer.hidden=false
    myloader.hidden=true
}
function second(){
    myloader.hidden=false
    mycontainer.hidden=true
}
first()
mybutton.addEventListener("click", async function(){
    second()
    const response=await fetch("https://api.quotable.io/random")
let quotes= await response.json()
myQuote.innerText=quotes.content
myAuthor.innerText=quotes.author
first()
})

copy.addEventListener("click",function(){
    navigator.clipboard.writeText(myQuote.innerText)
})

volume.addEventListener("click",function(){
   let speech= new SpeechSynthesisUtterance(myQuote.innerText)
   speechSynthesis.speak(speech)
})





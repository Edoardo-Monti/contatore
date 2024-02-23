let screen = document.querySelector(".screen")
let start 
let soldatino = false

document.getElementById("plus").addEventListener("click", function(){
    
    screen.innerHTML++
    screen.value = screen.innerHTML
    let results = Number(screen.value)
    console.log(results)
})

document.getElementById("minus").addEventListener("click", function(){
    screen.innerHTML--
    screen.value = screen.innerHTML
    let results = Number(screen.value)
    console.log(results)
})


document.getElementById("start").addEventListener("click", function(){
    if(!soldatino){
        start = setInterval(startFunction, 1000);
        soldatino = true
    }
})

document.getElementById("stop").addEventListener("click", function(){
    stopFunction()
    soldatino = false
})


function startFunction(){
    screen.innerHTML++
    screen.value = screen.innerHTML
    let results = Number(screen.value)
    console.log(results)
}


function stopFunction() {
    clearInterval(start);
  }


let screen = document.querySelector(".screen")
let start 
let soldatino = false

document.getElementById("plus").addEventListener("click", function(){

    if(start){
        
    }else{
        screen.innerHTML++
        screen.value = screen.innerHTML
        let results = Number(screen.value)
        console.log(results)
    }
})

document.getElementById("minus").addEventListener("click", function(){

    if(start){
        
    }else{
        screen.innerHTML--
        screen.value = screen.innerHTML
        let results = Number(screen.value)
        console.log(results)
    }
    
})

document.getElementById("reset").addEventListener("click", function(){

    screen.innerHTML = 0
    stopFunction()
    soldatino = false
    
})

// incremento automatico
document.getElementById("start").addEventListener("click", function(){
    if(!soldatino){
        start = setInterval(startFunction, 1000);
        soldatino = true
    }
})

document.getElementById("x3").addEventListener("click", function(){
    if(!soldatino){
        start = setInterval(startFunction, 333);
        soldatino = true
    }
})

document.getElementById("x10").addEventListener("click", function(){
    if(!soldatino){
        start = setInterval(startFunction, 100);
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
    start = ""
  }


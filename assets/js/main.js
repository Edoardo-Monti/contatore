let screen = document.querySelector(".screen")
let box1 = document.querySelector(".box-1")
let box2 = document.querySelector(".box-2")
let start 
let soldatino = false

const buttonMinus = document.createElement("button")
const buttonReset = document.createElement("button")
const buttonPlus = document.createElement("button")

buttonMinus.textContent = "-"
buttonMinus.setAttribute("id", "minus");
box1.appendChild(buttonMinus)

buttonReset.textContent = "Reset"
buttonReset.setAttribute("id", "reset");
box1.appendChild(buttonReset)

buttonPlus.textContent = "+"
buttonPlus.setAttribute("id", "plus");
box1.appendChild(buttonPlus)


const buttonStart = document.createElement("button")
const buttonX3 = document.createElement("button")
const buttonX10 = document.createElement("button")
const buttonStop = document.createElement("button")

buttonStart.textContent = "Start"
buttonStart.setAttribute("id", "start");
box2.appendChild(buttonStart)

buttonX3.textContent = "X3"
buttonX3.setAttribute("id", "x3");
box2.appendChild(buttonX3)

buttonX10.textContent = "X10"
buttonX10.setAttribute("id", "x10");
box2.appendChild(buttonX10)

buttonStop.textContent = "Stop"
buttonStop.setAttribute("id", "stop");
box2.appendChild(buttonStop)



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


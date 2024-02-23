let screen = document.querySelector(".screen")

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


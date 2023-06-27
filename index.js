const menu = document.querySelector(".menu")
      selectOptions = document.querySelector(".select_options")
      optionsStyle = window.getComputedStyle(selectOptions)
      hearts = document.querySelectorAll(".far")


menu.addEventListener("click", ()=> {
    if(optionsStyle.getPropertyValue("clip-path") === "circle(0% at 100% 0%)") {
        selectOptions.style.clipPath = "circle(100% at 50% 50%)"
    }else {
        selectOptions.style.clipPath = "circle(0% at 100% 0%)"
    }
})

document.addEventListener('mouseup', (event)=> {
    if(optionsStyle.getPropertyValue('clip-path') === "circle(100% at 50% 50%)"){
        if(!selectOptions.contains(event.target)){
            selectOptions.style.clipPath = "circle(0% at 100% 0%)"  
        }
    }
})

function changeHeart(x) {
    x.classList.toggle("fas")
     x.classList.toggle("far")
}
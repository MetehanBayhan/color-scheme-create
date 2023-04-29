const colorPicker = document.getElementById("color-picker")
const dropMenu = document.getElementById("color-mode")
const colorBox = document.getElementById("color-box")
const initialDisplay = document.getElementById("initial-color-box")
const hexCodeBox = document.getElementById("hex-code-box")
const initialHexCodeBox = document.getElementById("initial-hex-code-box")

// Initial Display 

function getInitialDisplay(){
  fetch("https://www.thecolorapi.com/scheme?hex=040e47&mode=monochrome&count=5")    
    .then(res => res.json()) 
    .then(data => {
      data.colors.forEach(function(color) {
        initialDisplay.innerHTML += `<div class="initial-color" id="initial-color" style=background-color:${color.hex.value} data-color=${color.hex.value}></div>`
         
        initialHexCodeBox.innerHTML += `<div class="initial-hex-code" id="initial-hex-code" data-color=${color.hex.value}> ${color.hex.value}</div>`
        colorBox.classList.remove('color-box')
        hexCodeBox.classList.remove('hex-code-box')
      }) 
    })     
}

getInitialDisplay()

//Get color scheme btn 

 document.getElementById("get-color-btn").addEventListener('click', () => {
    
    initialDisplay.style.display = 'none'
    initialHexCodeBox.style.display ="none"
    colorBox.classList.add('color-box')
    hexCodeBox.classList.add('hex-code-box')
    colorBox.innerHTML = ""
    hexCodeBox.innerHTML = ""

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(1)}&mode=${dropMenu.value}&count=5`)
    .then(res => res.json()) 
    .then(data => {
      
      data.colors.forEach(function(color) {      
        colorBox.innerHTML += `<div class="color-display" id="color-display" style=background-color:${color.hex.value} data-color=${color.hex.value}></div>`
        
        hexCodeBox.innerHTML += `<div class="hex-code" id="hex-code" data-color=${color.hex.value}> ${color.hex.value} </div>` 
         })
    })
})
       

// Copy code to clipboard 

document.addEventListener('click', (e) =>{
    const modalHexCode = document.querySelector(".modal-hex-code")
    if (e.target.dataset.color) {
    navigator.clipboard.writeText(e.target.dataset.color);
    modalHexCode.style.display = 'block'
    modalHexCode.textContent = `${e.target.dataset.color} copied to clipboard`
    setTimeout(() => {
        modalHexCode.style.display = 'none'   
    },2000)
      }
})


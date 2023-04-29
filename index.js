const getBtn = document.querySelector(".get-btn")
const colorInput = document.querySelector(".color-picker")
const dropdownMenu = document.getElementById("color-dropdown")





getBtn.addEventListener("click", () => {
  getBtn.disabled = true
  getScheme()
  console.log(colorSchemeArray);
  setTimeout(renderColors, 1000)
})

let colorSchemeArray = []
function getScheme() {
  if(dropdownMenu.value != "" && colorInput) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.substring(1)}&mode=${dropdownMenu.value}&count=5`)
      .then(res => res.json())
      .then(data => {
        for (let i = 0; i < 5 ; i++){
          colorSchemeArray.push(data.colors[i].hex.value);  
        }
      })
  }
}

function renderColors() {
  for (let i = 0; i < colorSchemeArray.length ; i++){
    document.querySelector(`.color-${i+1}`).style.backgroundColor = colorSchemeArray[i]
    document.querySelector(`.code-${i+1}`).textContent = colorSchemeArray[i]
  }
  colorSchemeArray = []
  getBtn.disabled = false
}


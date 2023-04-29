const getBtn = document.querySelector(".get-btn")
const colorInput = document.querySelector(".color-picker")
const dropdownMenu = document.getElementById("color-dropdown")




getBtn.addEventListener("click", () => {
  getBtn.disabled = true
  getScheme()
  renderColors()
})

let colorSchemeArray = []
let colorData = []
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



function getColorsHtml() {
  let colorString = ``
  for (let i = 0; i < colorSchemeArray.length ; i++){
    colorString += `
                    <div class="color" style="background-color:${colorSchemeArray[i]};">
                      <div class="hex-code-wrapper">
                        <p class="hex-code code-1">${colorSchemeArray[i]}</p>
                      </div>
                    </div>
                   `
  }
  return colorString
}

function renderColors() {
  document.querySelector(".color-scheme-div").innerHTML = getColorsHtml()
  colorSchemeArray = []
  getBtn.disabled = false
}


const getBtn = document.querySelector(".get-btn")
const colorInput = document.querySelector(".color-picker")
const dropdownMenu = document.getElementById("color-dropdown")




getBtn.addEventListener("click", () => {;
  getScheme()
   
})

function getScheme() {
  if(dropdownMenu.value != "" && colorInput) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.substring(1)}&mode=${dropdownMenu.value}&count=5`)
      .then(res => res.json())
      .then(data => {
          let colorString = ``
          document.querySelector(".color-scheme-div").innerHTML = ``
          data.colors.forEach(color => {
            document.querySelector(".color-scheme-div").innerHTML +=
              `<div class="color" style="background-color:${color.hex.value};">
                <div class="hex-code-wrapper">
                  <p class="hex-code code-1">${color.hex.value}</p>
                </div>
              </div>
              `
          });
          
        })
  }
}



function renderColors() {
  console.log(colorSchemeArray);
  colorSchemeArray = []
}


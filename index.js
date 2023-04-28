const getBtn = document.querySelector(".get-btn")
const colorInput = document.querySelector(".color-picker")
const dropdownMenu = document.getElementById("color-dropdown")





getBtn.addEventListener("click", () => {
  getScheme()
})


function getScheme() {
  if(dropdownMenu.value != "" && colorInput) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.substring(1)}&mode=${dropdownMenu.value}&count=5`)
      .then(res => res.json())
      .then(data => {
        console.log(data.colors)
      })
  }
}
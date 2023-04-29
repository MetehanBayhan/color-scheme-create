const getBtn = document.querySelector(".get-btn")
const colorInput = document.querySelector(".color-picker")
const dropdownMenu = document.getElementById("color-dropdown")
document.querySelector(".copy-message").style.display = "none"



getBtn.addEventListener("click", () => {;
  getScheme()
})

function getScheme() {
  if(dropdownMenu.value != "" && colorInput) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.substring(1)}&mode=${dropdownMenu.value}&count=5`)
      .then(res => res.json())
      .then(data => {
          document.querySelector(".color-scheme-div").innerHTML = ``
          let i = 1
          data.colors.forEach(color => {
            document.querySelector(".color-scheme-div").innerHTML +=
              `<div class="color" style="background-color:${color.hex.value};">
                <div class="hex-code-wrapper">
                  <p class="hex-code" data-colorid="code-${i}">${color.hex.value}</p>
                </div>
              </div>
              `
            i++
          });
        })
  }
}

initialDisplay()
function initialDisplay() {
  fetch(`https://www.thecolorapi.com/scheme?hex=E06469&mode=monochrome&count=5`)
      .then(res => res.json())
      .then(data => {
          document.querySelector(".color-scheme-div").innerHTML = ``
          let i = 1
          data.colors.forEach(color => {
            document.querySelector(".color-scheme-div").innerHTML +=
              `<div class="color" style="background-color:${color.hex.value};">
                <div class="hex-code-wrapper">
                  <p class="hex-code" data-colorid="code-${i}">${color.hex.value}</p>
                </div>
              </div>
              `
            i++
          });
        })
}



document.addEventListener("click", (e) => {
  if(e.target.className.includes("hex-code")){
    const text = document.querySelector(`[data-colorid~="${e.target.dataset.colorid}"]`).innerHTML;
    const copyContent = async () => {
      try {
        await navigator.clipboard.writeText(text);
        document.querySelector(".copy-message").style.display = "block"
        setTimeout(() => {
          document.querySelector(".copy-message").style.display = "none"
        }, 1000)
        
        console.log('Content copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
    copyContent()
  }
   
})


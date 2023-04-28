fetch("https://www.thecolorapi.com/scheme?hex=0047AB&format=html&mode=analogic&count=6")
  .then(res => res)
  .then(data => console.log(data))
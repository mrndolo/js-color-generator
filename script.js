function changeBackground() {
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    // console.log({red})
    const colors = `rgb(${red},${green},${blue})`
    // console.log(colors)
    document.getElementById('value').innerText = colors
    document.body.style.background = colors

}
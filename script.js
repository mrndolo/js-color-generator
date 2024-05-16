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

function changeGradientBackground(){
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    // Second Gradient Color
    const red2 = Math.floor(Math.random()*256)
    const green2 = Math.floor(Math.random()*256)
    const blue2 = Math.floor(Math.random()*256)
    // console.log({red})
    const gradient1 = `rgb(${red},${green},${blue})`
    const gradient2 = `rgb(${red2},${green2},${blue2})`

    // console.log(gradient1)
    // console.log(gradient2)
    document.getElementById('value').innerText = gradient1 +" " + gradient2
    
    document.body.style.background = `linear-gradient(to right, ${gradient1}, ${gradient2})`;
    
}
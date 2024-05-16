// function changeBackground() {
//     const red = Math.floor(Math.random()*256)
//     const green = Math.floor(Math.random()*256)
//     const blue = Math.floor(Math.random()*256)
//     // console.log({red})
//     const colors = `rgb(${red},${green},${blue})`
//     // console.log(colors)
//     document.getElementById('value').innerText = colors
//     document.body.style.background = colors

// }

// function changeGradientBackground(){
//     const red = Math.floor(Math.random()*256)
//     const green = Math.floor(Math.random()*256)
//     const blue = Math.floor(Math.random()*256)
//     // Second Gradient Color
//     const red2 = Math.floor(Math.random()*256)
//     const green2 = Math.floor(Math.random()*256)
//     const blue2 = Math.floor(Math.random()*256)
//     // console.log({red})
//     const gradient1 = `rgb(${red},${green},${blue})`
//     const gradient2 = `rgb(${red2},${green2},${blue2})`

//     // console.log(gradient1)
//     // console.log(gradient2)
//     document.getElementById('value').innerText = gradient1 +" " + gradient2
    
//     document.body.style.background = `linear-gradient(to right, ${gradient1}, ${gradient2})`;
    
// }

// Simplifying the code
function getRandomRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function setBackground(){
    const bgcolor = getRandomRGB();
    // change the body background color
    document.body.style.background = `${bgcolor}`
    // change the span text
    document.getElementById('value').innerText = `${bgcolor}`
}

function setGradientBackground(){
    const color1 = getRandomRGB();
    const color2 = getRandomRGB();
    // Change the body backgroung gradient colors
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    // Change the span text
    document.getElementById('value').innerText = `${color1}` + ` `+ `${color2}`;
}
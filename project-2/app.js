// Change the background color by clicking button
// and show hax color on disabled input field

// step-1 onload function

window.onload = () => {
        main()
}
    
// step-2 main function

function main() {
    const root = document.getElementById('root')
    const btn = document.getElementById('change-btn')
    const output = document.getElementById('output')

    btn.addEventListener('click', function () {
        const bgColor = generateHaxColor()
        root.style.backgroundColor = bgColor
        output.value = bgColor
    })
}
    
// step-3 generate hax color

function generateHaxColor() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

// step-4 collect all necessary information

// step-5 click event handler
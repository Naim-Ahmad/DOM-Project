/*
Project requirment
# - change the backround color by generating random color
# - and show hax code color in input field
#- and click button to copy the color code

*/

// step-1 onload handler function

window.onload = () => {
    main()
}

// step-2 crate a main function

function main() {
    const root = document.getElementById('root')
    const output = document.getElementById('output')
    const changeButton = document.getElementById('change-btn')
    const copyButton = document.getElementById('copy-btn')

    changeButton.addEventListener('click', function () {
        const bgColor = generateHexColor()
        root.style.backgroundColor = bgColor
        output.value = bgColor
    })

    copyButton.addEventListener('click', function () {
        window.navigator.clipboard.writeText(output.value)
    })
}

// step-3 generate hex color
function generateHexColor() {
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random() * 255)
    
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

// step-4 collect all neccesry information


// step-5 add event lissener


// step-6 
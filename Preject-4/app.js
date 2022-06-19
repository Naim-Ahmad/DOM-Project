/**
  Project Requirements
  
 1. click the button for changing background color by generating random color.
 2. show hex code in input field 
 3, click copy button to copy hex color code
 4. create toast messages 

 */


// Step 1 - onload handler function

let div = null

window.onload = () => {
    main()
}

// Step 2 - create main function

function main() {
    
    const root = document.getElementById('root')
    const outputs = document.getElementById('output')
    const copyBtn = document.getElementById('copyBtn')
    const colorBtn = document.getElementById('ChangeColorBtn')
    
    colorBtn.addEventListener('click', function () {
        const bgColor = generateHEXcolor()
        root.style.backgroundColor = bgColor
        outputs.value = bgColor
    })
    
    copyBtn.addEventListener('click', function () {
        window.navigator.clipboard.writeText(outputs.value)

        if (div !== null) {
			div.remove();
			div = null;
		}

        generateToastMessage(`${outputs.value} copied!`)
    })
}



// Step 3 - Generate random color

function generateHEXcolor() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    
}


function generateToastMessage(msg) {
    div = document.createElement('div')
    div.innerText = msg
    div.className = 'toast-messages toast-message-slide-in'

    document.body.appendChild(div)

    div.addEventListener('click', function () {
        div.classList.remove('toast-messages-slide-end')
        div.classList.add('toast-message-slide-out')

        div.addEventListener('animationend', function () {
            div.remove()
            div = null
        })
    })
}

// Step 4 - Collect all necessary information


// Step 5 - add event listener 

// Step 6 - create toast messages 
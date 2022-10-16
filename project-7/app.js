/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 * - Add a toast message when copied
 * - User can type their own hex code too
 * - show rgb color too, but do not need to edit it
 * - user can also copy the rgb color code
 */



let div = null

window.onload = () => {
    main()
}


function main() {
    
    const root = document.getElementById('root')
    const outputs = document.getElementById('output')
    const outputs2 = document.getElementById('output2')
    const copyBtn = document.getElementById('copyBtn')
    const colorBtn = document.getElementById('ChangeColorBtn')
    
    colorBtn.addEventListener('click', function () {
        const Decimal = generateDecimal()
        const hex = generateHEXcolor(Decimal)
        const rgb = generateRGB(Decimal)
        outputs2.value = rgb
        root.style.backgroundColor = hex
        outputs.value = hex.substring(1).toUpperCase()
    })
    
    copyBtn.addEventListener('click', function () {
        
        if (div !== null) {
            div.remove();
			div = null;
		}

        if(isValidHex(outputs.value)){
            window.navigator.clipboard.writeText(`#${outputs.value}`)
            generateToastMessage(`#${outputs.value} copied!`)
        }

        
    })

    outputs.addEventListener('keyup', function(e){
        const color = e.target.value;
        if (color) {
			outputs.value = color.toUpperCase();
			if (isValidHex(color)) {
				root.style.backgroundColor = `#${color}`;
			}
		}
    })
}


function generateHEXcolor({red, green, blue}) {
    const getTwoCode = (value) =>{
       const hex =  value.toString(16)
       return hex.length === 1 ? `0${hex}` : hex
    }

    return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`   
}

// Decimal number generator function
function generateDecimal(){
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return {
        red,
        green,
        blue
    }
}
// RGB Generator function
function generateRGB({red, green, blue}){
    return `rgb(${red},${green},${blue})`
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

/**
 * @param {string} color : ;
 */
function isValidHex(color){
    if(color.length !== 6) return false
    return /^[0-9A-Fa-f]{6}$/i.test(color)
}

// Step 1 - create onload handler

// step 2 - random color generator function

// step 3 - collect all necessary references

// step 4 - handle the change button click event

// step 5 - handle the copy button click event

// Step 6 - activate toast message

// Step 7 - create a dynamic toast message

// step 8 - clear toast message

// step 9 - create isHexValid function

// step 10 - implement change handler on input field

// step 11 - prevent copying hex code if it is not valid

// step 12 - refactor the color generator function

// step 13 - update color code to display rbg colors
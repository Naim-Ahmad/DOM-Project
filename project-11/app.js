// Global
const defaultObj = {
    red: 171,
    green: 205,
    blue: 239
}

const colorArr = [
    '#3C0C24',
    '#DDE520',
    '#E945C0',
    '#6A4503',
    '#90BAAB',
    '#6AC51D',
    '#246F68',
    '#07F8BB',
    '#D60865',
    '#796773',
    '#2545AB',
    '#C99332',
]

const copySound = new Audio('./copy-sound.wav')
const customColor = []

// Onload handler

window.onload = () => {
    main()
    updateToDom(defaultObj)
}

// Main function the collect all references
function main() {

    // Dom references

    const randomColorBtn = document.getElementById('random-color-btn')
    const showHexCode = document.getElementById('show-hex-code')
    const redSlider = document.getElementById('red')
    const greenSlider = document.getElementById('green')
    const blueSlider = document.getElementById('blue')
    const copyBtn = document.getElementById('copy-btn')
    const saveBtn = document.getElementById('save-btn')
    const paletteContainer = document.querySelector('.preset-palette-container')
    const customPresetContainer = document.querySelector('.custom-preset-container')
    
    // event listener 
    console.log(showHexCode.value)
    randomColorBtn.addEventListener('click', handleGenerateRandomColor)
    showHexCode.addEventListener('keyup', handleHexInput)
    redSlider.addEventListener('change', handleCreateSliderObject(redSlider, greenSlider, blueSlider))
    greenSlider.addEventListener('change', handleCreateSliderObject(redSlider, greenSlider, blueSlider))
    blueSlider.addEventListener('change', handleCreateSliderObject(redSlider, greenSlider, blueSlider))
    copyBtn.addEventListener('click', handleCopyToClipBoard)
    saveBtn.addEventListener('click', handleSaveBtn(customPresetContainer, showHexCode))

    paletteContainer.addEventListener('click', handlePresetColor(paletteContainer))
    
}


// All Handler 

function handleGenerateRandomColor(){
    const decimalObj = generateDecimal()
    updateToDom(decimalObj)
}

function handleHexInput(e){
    const color = e.target.value

    if (color) {
        document.getElementById('show-hex-code').value = color.toUpperCase()
        if (isValidHex(color)) {
            const decimal = hexToDecimal(color)
            updateToDom(decimal)
        }
    }
}

/**
 * 
 * @return {Object} color 
 */

 function handleCreateSliderObject(redSlider, greenSlider, blueSlider){
        
    return function(){
        const color = {
            red: parseInt(redSlider.value),
            green: parseInt(greenSlider.value),
            blue: parseInt(blueSlider.value)
        }
        updateToDom(color)
    }
 }

// handle copy to clip

function handleCopyToClipBoard() {
    const mode = checkedRadioBtn(document.getElementsByName('copy-mode'))
    if (mode === null) {
		throw new Error('Invalid Radio Input');
    }
    
    if (mode === 'hex') {
        const hexCode = document.getElementById('show-hex-code')
        if (mode && isValidHex(hexCode.value)) {
            navigator.clipboard.writeText(`#${hexCode.value}`)
            generateToastMessage(`#${hexCode.value}`)
            copySound.play()
            copySound.volume = 0.3
        } 

    } else {
        const rgbCode = document.getElementById('show-rgb-code')
        navigator.clipboard.writeText(rgbCode.value)
        generateToastMessage(`${rgbCode.value}`)
        copySound.play()
        copySound.volume = 0.3
    }
}

// handle the preset color

function handlePresetColor(parent) {
    updatePaletteColor(parent, colorArr)
    return function (event) {
        const child = event.target
    if (child.classList.value === 'preset-color-box') {
        const color = child.getAttribute('data-color')
        navigator.clipboard.writeText(color)
        copySound.play()
        copySound.volume = 0.3
        generateToastMessage(color)
    }
    }
}

// handle save button

function handleSaveBtn(parent, showHexCode) {
    return function () {
        const color = `#${showHexCode.value}`;
        customColor.push(color)
        updatePaletteColor(parent, customColor)
        const index = customColor.indexOf(color)
        customColor.splice(index, 1)
        generateToastMessage(color, 'saved')
        copySound.play()
        copySound.volume = 0.3
    }
}

// Dom related function 

/***
 * The function take an color object and update the dom every where
 * @param {Object} color
 */

function updateToDom(decimalObj){
    const hex = generateHEXcolor(decimalObj).toUpperCase()
    const rgb = generateRGB(decimalObj)

    document.getElementById('display').style.backgroundColor = hex
    document.getElementById('show-hex-code').value = hex.slice(1)
    document.getElementById('show-rgb-code').value = rgb
    document.getElementById('red-label').innerText = decimalObj.red
    document.getElementById('green-label').innerText = decimalObj.green
    document.getElementById('blue-label').innerText = decimalObj.blue
    document.getElementById('red').value =  decimalObj.red
    document.getElementById('green').value =  decimalObj.green
    document.getElementById('blue').value = decimalObj.blue   
}

/**
 * The function take a string and it update the dom whit toast message
 * @param {String} msg 
 */

function generateToastMessage(code , message = 'copied') {
    let p = document.createElement('p')
    p.innerText = `${code} ${message}!`
    p.className = 'toast'
    
    let toastContainer = document.querySelector('.toast-container')
    toastContainer.appendChild(p)
    
    p.addEventListener('animationend', function () {
        p.remove()
    })
}

/**
 * generate p element and append it to paren 
 * @param {Array} color
 */

function generatePaletteBox(color) { 
    const p = document.createElement('p')
    p.className = 'preset-color-box'
    p.style.background = color
    p.setAttribute('data-color', color)  

    return p
}
/**
 * the function take parent object and an color array and generate palette box by colors array an append the color to parent object
 * @param {Object} parent 
 * @param {Array} colors 
 */

function updatePaletteColor(parent, colors) {
    colors.forEach(color => {
        const child = generatePaletteBox(color)
        parent.appendChild(child)
    });
}




// Utility
/**
 * The function Generate random number and return object of color decimal
 * @returns {Object} color
 */
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

/**
 * 
 * @param {Object} color 
 * @returns {return} hex color code
 */
function generateHEXcolor({red, green, blue}) {
    const getTwoCode = (value) =>{
       const hex =  value.toString(16)
       return hex.length === 1 ? `0${hex}` : hex
    }

    return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`   
}

/**
 * 
 * @param {Object} color
 * @returns {String} rgb color code
 */
function generateRGB({red, green, blue}){
    return `rgb(${red}, ${green}, ${blue})`
}

/**
* The function take a hex color code and return a rgb color code
*@param {string} hex color code
*@return {String} rgb color code
*/
function hexToRgb(hex){
const red = hex.slice(0, 2)
const green = hex.slice(2, 4)
const blue = hex.slice(4)

return `rgb(${parseInt(red, 16)}, ${parseInt(green, 16)}, ${parseInt(blue, 16)})`
}

/**
 * The function take a string and return a boolean
 * @param {string} color : ;
 * @return {boolean}
 */
function isValidHex(color){
    if(color.length !== 6) return false
    return /^[0-9A-Fa-f]{6}$/i.test(color)
}

/**
 * 
 * @param {String} hex 
 */

function hexToDecimal(hex){
    const red = hex.slice(0, 2)
    const green = hex.slice(2, 4)
    const blue = hex.slice(4)

    return {
        red: parseInt(red, 16),
        green: parseInt(green, 16),
        blue: parseInt(blue, 16)
    }
}

function checkedRadioBtn(node) {
    let isCheckedRadio = null
    for (let i = 0; i < node.length; i++){
        if(node[i].checked){isCheckedRadio = `${node[i].value}`}    
    }
    return isCheckedRadio
}


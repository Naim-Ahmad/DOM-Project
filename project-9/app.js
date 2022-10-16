
// Global
let div = null

window.onload = () => {
    main()
}

// Main function the collect all references
function main() {
    
    const randomColorBtn = document.getElementById('random-color-btn')
    

    randomColorBtn.addEventListener('click', generateRandomColor)
        
    }


// All Handler 
function generateRandomColor(){
    const decimalObj = generateDecimal()
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
// Dom related function 

/**
 * The function take a string and it update the dom whit toast message
 * @param {String} msg 
 */
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
    return `rgb(${red},${green},${blue})`
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

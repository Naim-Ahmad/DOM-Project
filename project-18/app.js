
// Global

let counter = 0;

window.onload = () => {
    main()
}

function main() {
    const incrementInp = document.getElementById('increment-input')
    const decrementInp = document.getElementById('decrement-input')
    const IncrementBtn = document.getElementById('IncrementBtn')
    const decrementBtn = document.getElementById('decrementBtn')
    const displayNumber = document.querySelector('.display-number')

    incrementInp.addEventListener('keyup', checkNumber(incrementInp))
    decrementInp.addEventListener('keyup', checkNumber(decrementInp))
    
    IncrementBtn.addEventListener('click', function () {
        const value = parseInt(incrementInp.value)
        value ? counter += value : counter++ 
        if (counter <= 9) {
            displayNumber.innerHTML = `0${counter}`
        } else {
            displayNumber.innerHTML = counter
        }
    })

    decrementBtn.addEventListener('click', function () {
        const value = parseInt(decrementInp.value)
        value ? counter -= value : counter--
        if (counter < 0) {
            counter = 0
        }
        if (counter <= 9) {
            displayNumber.innerHTML = `0${counter}`
        } else {
            displayNumber.innerHTML = counter
        }
    })
    
}

function checkNumber(Node) {
    return function () {
        if (Node.value > 100) {
           Node.value = 100
        } else if (Node.value < 0) {
            Node.value = 0
        }
    }
}
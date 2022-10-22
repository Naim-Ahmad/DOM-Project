
// 

window.onload = () => {
    main()
}

function main() {
    const submitBtn = document.getElementById('submitBtn')
    const resetBtn = document.getElementById('resetBtn')
    const userNameInp = document.getElementById('name-inp')
    const displayUserName = document.getElementById('display-user-name')
    const showResult = document.getElementById('show-result')

    submitBtn.addEventListener('click', function () {
        showResult.style.display = 'block'
        const userName = userNameInp.value
        displayUserName.innerText = userName
        userNameInp.value = ''
     })
    
    resetBtn.addEventListener('click', function () {
        userNameInp.value = ''
        displayUserName.innerText = 'User'
        showResult.style.display = 'none'
    })
    showResult.style.display = 'none'
}
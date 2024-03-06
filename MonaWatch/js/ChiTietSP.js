const popUp = document.querySelector('.popUp')
const btnAddToCart = document.querySelector('.cart')

btnAddToCart.onclick = () => {
    popUp.classList.add('active');
    TimeOut();
}

const TimeOut = () => {
    setTimeout(() => removePopUp(), 3000)
}

const removePopUp = () => {
    clearTimeout(TimeOut)
    popUp.classList.remove('active')
}
const $signinBtn = document.querySelector('.signin-button');
const $closeSigninBtn = document.querySelector('.close-signin-btn');

const $overlayWindow = document.querySelector('.overlay-window')
const $main = document.querySelector('main');
const $footer = document.querySelector('footer');
const $signinContent = document.querySelector('.signin-content');


$signinBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    $signinContent.classList.add("visible")

    $overlayWindow.classList.add('overlay')
    $main.classList.add('difuminado')
    $footer.classList.add('difuminado')
})

$closeSigninBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    $signinContent.classList.remove("visible")

    $overlayWindow.classList.remove('overlay')
    $main.classList.remove('difuminado');
    $footer.classList.remove('difuminado');
})
// navbartoggle
const navToggleBtn = document.querySelector(".navtogglebtn");
const navbar = document.querySelector(".navbar");

navToggleBtn.addEventListener("click",()=> {
    const transitionRight = navbar.getAttribute('data-right');
    if(transitionRight==='true') {
        navbar.setAttribute('data-right',false);
        navToggleBtn.innerHTML = `<img src="./images/icon-close-menu.svg" alt="menu icon">`;
    }
    else {
        navbar.setAttribute('data-right',true);
        navToggleBtn.innerHTML = `<img src="./images/icon-menu.svg" alt="menu icon">`;
    }
});

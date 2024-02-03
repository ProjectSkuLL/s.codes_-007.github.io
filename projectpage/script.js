// navbartoggle
const navToggleBtn = document.querySelector(".navtoggleBtn");
const navbar = document.getElementById("navigationbar");

navToggleBtn.addEventListener("click", ()=> {
    const visibility = navbar.getAttribute('data-hidden');
    if(visibility==='true') {
        navbar.setAttribute('data-hidden',false);
        document.getElementById("navtogglebtn").innerHTML = `<i class="fa fa-solid fa-close"></i>`;
    }
    else {
        navbar.setAttribute('data-hidden',true);
        document.getElementById("navtogglebtn").innerHTML = `<i class="fa fa-solid fa-bars"></i>`;
    }
});

// showcasenavbar 
const showcasenav = document.getElementById("showcasenav");
const showcasenavtoggleBtn = document.getElementById("sn-togglebtn");
showcasenavtoggleBtn.addEventListener("click",()=> {
    const translateVisibility = showcasenav.getAttribute('data-translate');
    if(translateVisibility==='true') {
        showcasenav.setAttribute('data-translate',false);
    }
    else {
        showcasenav.setAttribute('data-translate',true);
    }
});
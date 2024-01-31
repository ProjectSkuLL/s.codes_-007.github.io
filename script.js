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

// redirection to pages
// to redirect to my instagram profile
const instagram = document.querySelector(".fa-instagram");
instagram.addEventListener("click", ()=>{
    window.location.href="https://www.instagram.com/s.codes__007?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
});
// to redirect to my main github page
const github = document.querySelector(".fa-github");
github.addEventListener("click",()=>{
    window.location.href="https://github.com/ProjectSkuLL";
});
// for current repository
const repository = document.querySelector(".repository");
repository.addEventListener("click", ()=>{
    window.location.href="https://github.com/ProjectSkuLL/s.codes_-007.github.io";
});
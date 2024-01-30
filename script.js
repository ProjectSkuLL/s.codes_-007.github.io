const instagrambtn = document.getElementById("instagram");
instagrambtn.addEventListener("click",()=> {
    window.location.href= "https://www.instagram.com/s.codes__007/";
});

const repoBtn = document.getElementById("repobtn");
repoBtn.addEventListener("click",()=> {
    window.location.href="https://github.com/ProjectSkuLL/s.codes_-007.github.io";
});


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
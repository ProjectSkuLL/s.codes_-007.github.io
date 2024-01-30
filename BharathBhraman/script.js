const navbar  = document.querySelector(".navbar");
const navItems = document.getElementsByClassName('navtogglebtn');
const navToggle =()=> {
    const visibility = navbar.getAttribute('data-hidden');
    if(visibility==='true') {
        navbar.setAttribute('data-hidden',false);
        navItems[0].getElementsByTagName("span")[0].style.transform = "rotate(50deg)";
        navItems[0].getElementsByTagName("span")[0].style.transition = ".4s";
        navItems[0].getElementsByTagName("span")[0].style.border = "1px solid white";
        navItems[0].getElementsByTagName("span")[1].style.transform = "rotate(-50deg)";
        navItems[0].getElementsByTagName("span")[1].style.transition = ".4s";
        navItems[0].getElementsByTagName("span")[1].style.border = "1px solid white";
        navItems[0].getElementsByTagName("span")[2].style.border = "none";
    }
    else {
        navbar.setAttribute('data-hidden',true);
        navItems[0].getElementsByTagName("span")[0].style.transform = "rotate(0deg)";
        navItems[0].getElementsByTagName("span")[0].style.border = "1px solid";
        navItems[0].getElementsByTagName("span")[1].style.transform = "rotate(0deg)";
        navItems[0].getElementsByTagName("span")[1].style.border = "1px solid";
        navItems[0].getElementsByTagName("span")[2].style.border = "1px solid";
    }
}

// Image Slider Code
const slider = () => {
    const slides = document.querySelector(".slides");
    const slideButtons = document.querySelectorAll(".slide-button");
    const maxScroll = slides.scrollWidth - slides.clientWidth;

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev" ? -1:1;
            const scroll = slides.clientWidth * direction;
            slides.scrollBy({ left: scroll, behavior: "smooth"});
        });
    });

    const visibilityButtons=()=> {
        slideButtons[0].style.display = slides.scrollLeft <=0 ? "none" : "block";
        slideButtons[1].style.display = slides.scrollLeft >= maxScroll ? "none" : "block";
    }
    slides.addEventListener("scroll", ()=>{
        visibilityButtons();
    })
}
slider();
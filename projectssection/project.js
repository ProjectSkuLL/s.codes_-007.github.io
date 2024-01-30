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
const toggleBtn1 = document.querySelector(".toggle-btn");
const para1 = document.querySelector(".para1");
const faqToggle=()=>{
    const visibility = para1.getAttribute("data-visible");
    if(visibility === "false") {
        para1.setAttribute('data-visible', true);
        toggleBtn1.innerHTML = `<img src="./assets/images/icon-minus.svg" alt="">`;
    }
    else {
        para1.setAttribute('data-visible', false);
        toggleBtn1.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="">`;
    }
}
const toggleBtn2 = document.querySelector(".toggle-btn2");
const para2 = document.querySelector(".para2");
const faqToggle2=()=>{
    const visibility = para2.getAttribute("data-visible");
    if(visibility === "false") {
        para2.setAttribute('data-visible', true);
        toggleBtn2.innerHTML = `<img src="./assets/images/icon-minus.svg" alt="">`;
    }
    else {
        para2.setAttribute('data-visible', false);
        toggleBtn2.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="">`;
    }
}

const toggleBtn3 = document.querySelector(".toggle-btn3");
const para3 = document.querySelector(".para3");
const faqToggle3=()=>{
    const visibility = para3.getAttribute("data-visible");
    if(visibility === "false") {
        para3.setAttribute('data-visible', true);
        toggleBtn3.innerHTML = `<img src="./assets/images/icon-minus.svg" alt="">`;
    }
    else {
        para3.setAttribute('data-visible', false);
        toggleBtn3.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="">`;
    }
}

const toggleBtn4 = document.querySelector(".toggle-btn4");
const para4 = document.querySelector(".para4");
const faqToggle4=()=>{
    const visibility = para4.getAttribute("data-visible");
    if(visibility === "false") {
        para4.setAttribute('data-visible', true);
        toggleBtn4.innerHTML = `<img src="./assets/images/icon-minus.svg" alt="">`;
    }
    else {
        para4.setAttribute('data-visible', false);
        toggleBtn4.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="">`;
    }
}
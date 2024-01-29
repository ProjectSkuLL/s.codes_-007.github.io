const tw = document.querySelector(".tw");
const textWrapper = document.querySelector('.text-wrapper');
tw.addEventListener("click",()=>{
    const visibility = textWrapper.getAttribute('data-visible');
    if(visibility==='false') {
        textWrapper.setAttribute('data-visible',true);
    }
    else {
        textWrapper.setAttribute('data-visible',false);
    }
})
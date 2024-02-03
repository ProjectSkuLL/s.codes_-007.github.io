const navbar = document.querySelector(".navbar");
const menuopen = document.getElementById('menuopen');
const menuclose = document.getElementById('menuclose');
const navToggle=()=> {
    const navshift = navbar.getAttribute('data-shift');
    if(navshift==='false') {
        navbar.setAttribute('data-shift', true);
        menuopen.style.display = 'none';
        menuclose.style.display = 'block';
    }
    else {
        navbar.setAttribute('data-shift', false);
        menuopen.style.display = 'block';
        menuclose.style.display = 'none';
    }
}
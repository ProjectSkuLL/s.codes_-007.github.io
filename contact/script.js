
// FORM
const fullName = document.getElementById("fname");
const email = document.getElementById("email");
const feedback = document.getElementById("feedback");
// form validations-------------------------------------------------------

const form = document.querySelector("form");
const mailError = document.querySelector("#email + span.mailerror");

email.addEventListener("input", () => {
    if (email.validity.valid) {
        mailError.textContent = "";
        mailError.className = "error";
    }
    else {
        showError();
    }
});
form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});
const showError = () => {
    if (email.validity.valueMissing) {
        mailError.textContent = "please enter an email address!";
    }
    else if (email.validity.typeMismatch) {
        mailError.textContent = "please enter a valid email address!";
    }
    mailError.className = "error active";
}
// form validations-------------------------------------------------------

// Form wrapper toggle-----------------------------------------------------

const submitBtn = document.getElementById('submit');
const dismissBtn = document.getElementById('dismiss');

const contactMain = document.querySelector(".contact-main");
const successMsg = document.querySelector(".success-msg");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const visibilityMain = contactMain.getAttribute('data-visible');
    const visibilityPop = successMsg.getAttribute('data-visible');

    if (fullName.validity.valid && email.validity.valid && visibilityMain === 'true' && visibilityPop === 'false') {

        contactMain.setAttribute('data-visible', false);
        successMsg.setAttribute('data-visible', true);

        const formObject = {
            "name": `${fullName.value}`,
            "email": `${email.value}`,
            "feedback": `${feedback.value}`,
        };
        console.log(formObject);

    };
});

dismissBtn.addEventListener("click", () => {
    const visibilityMain = contactMain.getAttribute('data-visible');
    const visibilityPop = successMsg.getAttribute('data-visible');
    if (visibilityMain === 'false' && visibilityPop === 'true') {
        contactMain.setAttribute('data-visible', true);
        successMsg.setAttribute('data-visible', false);
        location.reload();
    };
});

// Rediractions-----------------------------------------------------------------

const instagram = document.getElementById("instagram");
instagram.addEventListener("click", () => {
    window.location.href = `https://www.instagram.com/s.codes__007?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D`;
});

const github = document.getElementById("github");
github.addEventListener("click", () => {
    window.location.href = "https://github.com/ProjectSkuLL";
});
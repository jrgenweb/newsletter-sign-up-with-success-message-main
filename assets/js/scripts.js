const inputEmail = document.getElementById('email');
const errorMessage = document.querySelector('.error_message');
const form = document.getElementById('#form');


const userEmail = document.getElementById('user-email');
const newsLetterForm = document.getElementById('newsletter-form');
const newsLetterSuccessForm = document.getElementById('newsletter-success-form');
const closeBtn = document.querySelector('.btn_close');


form.addEventListener('submit', formSubmit);
closeBtn.addEventListener('click', formClose)

function formSubmit(e) {
    e.preventDefault();
    const inputEmailValue = inputEmail.value;
    if (checkEmail(inputEmailValue)) {
        newsLetterForm.remove();
        newsLetterSuccessForm.classList.add('active');
        userEmail.innerText = inputEmailValue;
    } else {
        errorMessage.classList.add('show')
    }
}

function formClose(e) {
    newsLetterSuccessForm.remove();
}

function checkEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}




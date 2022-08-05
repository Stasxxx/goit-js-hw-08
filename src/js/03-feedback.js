const LOCALSTORAGE_KEY = 'feedback-form-state';


const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
    button: document.querySelector('.feedback-form button'),
}
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

populateTextarea()

function onFormSubmit(evt) {
    evt.preventDefault()
    const elements = evt.currentTarget.elements;
    const email = elements.email.value;
    const message = elements.message.value;
    
    formData = {
        email: email,
        message: message,
    }
    console.log(formData)
    evt.currentTarget.reset()
    localStorage.removeItem(LOCALSTORAGE_KEY)
}

function onTextareaInput(evt) {
    const value = evt.currentTarget.value;

    localStorage.setItem(LOCALSTORAGE_KEY, value)
}


function populateTextarea() {
    const saveValue = localStorage.getItem(LOCALSTORAGE_KEY);

    if (saveValue) {
    refs.textarea.value = saveValue;
  }
}
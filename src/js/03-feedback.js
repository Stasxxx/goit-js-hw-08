const LOCALSTORAGE_KEY = 'feedback-form-state';

let formData = {};

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
    button: document.querySelector('.feedback-form button'),
}
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onTextareaInput);

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
    const value = evt.currentTarget.elements;
    const email = value.email.value;
    const message = value.message.value;
    formData = {
        email: email,
        message: message,
    }

    
// console.log(Object.value);
    // console.log(evt.target.name);
    // if (evt.target.name === 'email') {
    //     formData.email.push(evt.target.value);

    // }
    
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}


function populateTextarea() {
    const saveValue = localStorage.getItem(LOCALSTORAGE_KEY);

    if (saveValue) {
    refs.textarea.value = saveValue;
  }
}

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });
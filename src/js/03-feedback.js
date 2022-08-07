import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
let formData = {};

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}
 
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea()

function onFormSubmit(evt) {
    evt.preventDefault()
    const elements = evt.currentTarget.elements;
    const email = elements.email.value;
    const message = elements.message.value;
    console.log(message)
    if (message === "" || email === "") {
       alert("Заповніть пусті поля")
    }else {
    evt.currentTarget.reset()
    localStorage.removeItem(LOCALSTORAGE_KEY)
    formData = {}
    console.log(formData)
    }
}

function onTextareaInput(evt) {
    formData[evt.target.name] = evt.target.value;
   
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
    const saveValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    

    if (saveValue) {
        refs.input.value = saveValue.email || "";
        refs.textarea.value = saveValue.message || "";
  }
}

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });
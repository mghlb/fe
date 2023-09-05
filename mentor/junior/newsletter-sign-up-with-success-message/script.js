const emailInputField = document.querySelector('#email')
const button = document.querySelector('button')
const successDialog = document.querySelector('.success__container')
const signupNewsletter = document.querySelector('.container')

button.addEventListener('click', () => {
  if (!validateEmail(emailInputField.value)) {
    emailInputField.classList.add('input__error')
  } else {
    signupNewsletter.classList.add('display__none')
    successDialog.classList.remove('display__none')
  }
})

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

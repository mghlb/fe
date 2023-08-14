const inputs = document.querySelectorAll('input')
const formButton = document.querySelector('.formButton')

formButton.addEventListener('click', (event) => {
  event.preventDefault()
  inputs.forEach((input) => {
    if (input.value.length < 1) {
      const errorText = `<p class='errorText'>${input.placeholder} cannot be empty</p>`
      const errorIcon = `<img src="./images/icon-error.svg" class='errorIcon' />`
      input.insertAdjacentHTML('afterend', errorIcon)
      input.insertAdjacentHTML('afterend', errorText)
    }
  })
})

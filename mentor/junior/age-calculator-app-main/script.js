const dayInput = document.querySelector('#day')
const monthInput = document.querySelector('#month')
const yearInput = document.querySelector('#year')
const inputFields = document.querySelectorAll('input')
const arrow = document.querySelector('.arrow')

dayInput.addEventListener('input', () => {
  if (dayInput.value > 31 || dayInput.value < 1) {
    dayInput.parentElement.setAttribute('data-content', 'Must be a valid day')
    dayInput.parentElement.classList.add('error')
  } else {
    dayInput.parentElement.classList.remove('error')
  }
})

monthInput.addEventListener('input', () => {
  if (monthInput.value > 12 || monthInput.value < 1) {
    monthInput.parentElement.setAttribute(
      'data-content',
      'Must be a valid month'
    )
    monthInput.parentElement.classList.add('error')
  } else {
    monthInput.parentElement.classList.remove('error')
  }
})

yearInput.addEventListener('input', () => {
  if (yearInput.value > 2024) {
    yearInput.parentElement.setAttribute('data-content', 'Must be in the past')
    yearInput.parentElement.classList.add('error')
  } else {
    yearInput.parentElement.classList.remove('error')
  }
})

arrow.addEventListener('click', () => {
  const date = []
  inputFields.forEach((inputField) => {
    if (inputField.value.length == 0) {
      inputField.parentElement.setAttribute(
        'data-content',
        'This field is required'
      )
      inputField.parentElement.classList.add('error')
    } else {
      inputField.parentElement.classList.remove('error')
      date.push(inputField.value)
    }
  })

  if (!isValidDate(date.join('/'))) {
    dayInput.parentElement.setAttribute('data-content', 'Must be a valid date')
    dayInput.parentElement.classList.add('error')
  } else {
    dayInput.parentElement.classList.remove('error')
  }
})

function isValidDate(date) {
  if (!/^\d\d\/\d\d\/\d\d\d\d$/.test(date)) {
    return false
  }

  let [day, month, year] = date.split('/').map((p) => parseInt(p, 10))
  month -= 1
  const dateObj = new Date(year, month, day)

  return (
    dateObj.getMonth() === month &&
    dateObj.getDate() === day &&
    dateObj.getFullYear() === year
  )
}

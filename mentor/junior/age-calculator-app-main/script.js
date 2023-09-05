const dayInput = document.querySelector('#day')
const monthInput = document.querySelector('#month')
const yearInput = document.querySelector('#year')
const inputFields = document.querySelectorAll('input')
const arrow = document.querySelector('.arrow')
const yearValue = document.querySelector('.year__value')
const monthValue = document.querySelector('.month__value')
const dayValue = document.querySelector('.day__value')

dayInput.addEventListener('input', () => {
  if (dayInput.value > 31 || dayInput.value < 1) {
    dayInput.parentElement.setAttribute('data-content', 'Must be a valid day')
    dayInput.parentElement.classList.add('error')
    dayInput.classList.add('borderColor')
  } else {
    dayInput.parentElement.classList.remove('error')
    dayInput.classList.remove('borderColor')
  }
})

monthInput.addEventListener('input', () => {
  if (monthInput.value > 12 || monthInput.value < 1) {
    monthInput.parentElement.setAttribute(
      'data-content',
      'Must be a valid month'
    )
    monthInput.parentElement.classList.add('error')
    monthInput.classList.add('borderColor')
  } else {
    monthInput.parentElement.classList.remove('error')
    monthInput.classList.remove('borderColor')
  }
})

yearInput.addEventListener('input', () => {
  if (yearInput.value > 2024) {
    yearInput.parentElement.setAttribute('data-content', 'Must be in the past')
    yearInput.parentElement.classList.add('error')
    yearInput.classList.add('borderColor')
  } else {
    yearInput.parentElement.classList.remove('error')
    yearInput.classList.remove('borderColor')
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
      inputField.classList.add('borderColor')
      return
    } else {
      inputField.parentElement.classList.remove('error')
      inputField.classList.remove('borderColor')
      date.push(inputField.value)
    }
  })

  if (!isValidDate(date.join('/'))) {
    dayInput.parentElement.setAttribute('data-content', 'Must be a valid date')
    monthInput.parentElement.setAttribute('data-content', '')
    yearInput.parentElement.setAttribute('data-content', '')

    inputFields.forEach((inputField) => {
      inputField.parentElement.classList.add('error')
      inputField.classList.add('borderColor')
    })
  } else {
    inputFields.forEach((inputField) => {
      inputField.parentElement.classList.remove('error')
      inputField.classList.remove('borderColor')

      const {day, month, year} = calculateAge(date.join('/'))
      animateValue(dayValue, 0, day, 1000)
      animateValue(monthValue, 0, month, 1000)
      animateValue(yearValue, 0, year, 1000)
    })
  }
})

function isValidDate(date) {
  if (!/^\d\d\/\d\d\/\d\d\d\d$/.test(date)) {
    return false
  }

  let [day, month, year] = date.split('/').map((p) => parseInt(p))
  month -= 1
  const dateObj = new Date(year, month, day)

  return (
    dateObj.getMonth() === month &&
    dateObj.getDate() === day &&
    dateObj.getFullYear() === year
  )
}

function calculateAge(date) {
  let [dd, mm, yyyy] = date.split('/').map((p) => parseInt(p, 10))
  mm -= 1
  const dateObj = new Date(yyyy, mm, dd)
  const currentDate = new Date()

  const day = Math.abs(currentDate.getDate() - dateObj.getDate())
  let month = currentDate.getMonth() - dateObj.getMonth()
  let year = currentDate.getFullYear() - dateObj.getFullYear()

  if (month < 0 || (month == 0 && currentDate.getDate() < dateObj.getDate())) {
    year--
    month += 12
  }

  return {day, month, year}
}

function animateValue(element, start, end, duration) {
  let startTimestamp = null

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    element.textContent = Math.floor(progress * (end - start))
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}

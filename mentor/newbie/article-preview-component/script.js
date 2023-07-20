const button = document.querySelector('.share-1')
const userInfo = document.querySelector('.flex-space')
const popUp = document.querySelector('.popup')

button.addEventListener('click', () => {
  if (window.innerWidth < 790) userInfo.classList.add('hidden')
  popUp.classList.toggle('hidden')
})

const answerBtn = document.querySelectorAll('.answer-btn')
const answerText = document.querySelectorAll('.answer')
answerBtn.forEach((btn, text) => {
  let isHidden = true
  btn.addEventListener('click', () => {
    answerText[text].classList.toggle('toggle')
    isHidden ? btn.textContent = 'Скрыть ответ' : btn.textContent = 'Показать ответ'
    isHidden = !isHidden
  })
})

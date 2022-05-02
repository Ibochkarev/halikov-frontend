
window.addEventListener("load", function (event) {
  const questions = document.querySelectorAll('.accordion-item__question'),
    answer = document.querySelectorAll('.accordion-item__answer');

  questions.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector('#' + tab.dataset.tabTarget)

      answer.forEach(tabContent => {
        tabContent.classList.remove('is-active')
      })
      questions.forEach(tab => {
        tab.classList.remove('is-active')
      })
      tab.classList.add('is-active')
      target.classList.add('is-active')
    })
  })
});

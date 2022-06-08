if (document.querySelector('.s-course-direction')) {
  window.addEventListener("load", function (event) {
    const tabs = document.querySelectorAll('.s-course-direction__item'),
      tabContents = document.querySelectorAll('.s-course-direction__item-content')

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector('#' + tab.dataset.tabTarget)

        tabContents.forEach(tabContent => {
          tabContent.classList.remove('is-active')
        })
        tabs.forEach(tab => {
          tab.classList.remove('is-active')
        })
        tab.classList.add('is-active')
        target.classList.add('is-active')
      })
    })
  });
}
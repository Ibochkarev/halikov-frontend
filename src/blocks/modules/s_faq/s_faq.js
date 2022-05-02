
window.addEventListener("load", function (event) {
  const tabs = document.querySelectorAll('.accordion-item__question'),
    tabContents = document.querySelectorAll('.accordion-item__answer'),
    accordionBtns = document.querySelectorAll(".accordion-item__answer");

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

  // tabs.forEach((accordion) => {
  //   accordion.onclick = function () {
  //     this.classList.toggle("is-active");
  //   };
  // });
});

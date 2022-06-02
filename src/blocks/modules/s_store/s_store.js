
if (document.querySelector('.s-store__tabs')) {
  const tabs = document.querySelector('.s-store__tabs'),
    tabButtons = tabs.querySelectorAll('[role="tab"]'),
    tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

  function tabClickHandler(e) {
    //Hide All Tabpane
    tabPanels.forEach(panel => {
      panel.hidden = 'true';
    });

    //Deselect Tab Button
    tabButtons.forEach(button => {
      button.setAttribute('aria-selected', 'false');
    });

    //Mark New Tab
    e.currentTarget.setAttribute('aria-selected', 'true');

    //Show New Tab
    const { id } = e.currentTarget,
      currentTab = tabPanels.find(
      panel => panel.getAttribute('aria-labelledby') === id
    );

    currentTab.hidden = false;
  }

  tabButtons.forEach(button => {
    button.addEventListener('click', tabClickHandler);
  })
}

const productButton = document.querySelectorAll('.m-product__button'),
  productPopup = document.getElementById("popupCart")

productButton.forEach(button => {
  button.addEventListener('click', e => {
    let productTitle = button.dataset.title,
      productPrice = button.dataset.price,
      productPricenote = button.dataset.pricenote,
      productDescription = button.dataset.description,
      productImage = button.dataset.image,
      popupProductTitle = document.querySelector('.s-popup-product__title'),
      popupProductPrice = document.querySelector('.s-popup-product__price'),
      popupProductDescription = document.querySelector('.s-popup-product__description'),
      popupProductImage = document.querySelector('.s-popup-product__image')

      popupProductTitle.innerHTML = productTitle
      popupProductPrice.innerHTML = productPrice,
      popupProductDescription.innerHTML = productDescription,
      popupProductImage.srcset = productImage
  });
})


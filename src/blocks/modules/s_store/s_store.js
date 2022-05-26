
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
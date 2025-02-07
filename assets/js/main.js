const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target); // Select the tab content linked to the clicked tab

        // Remove 'tab__active' from all tab contents
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });

        // Add 'tab__active' to the target content
        target.classList.add('tab__active');

        // Remove 'tab__active' from all tab buttons
        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });

        // Add 'tab__active' to the clicked tab button
        tab.classList.add('tab__active');
    });
});








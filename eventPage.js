'use strict';

const openDataTab = () => {
  chrome.tabs.create({
    url: 'data.html',
  });
};

document.getElementById('dataLink').addEventListener('click', openDataTab);

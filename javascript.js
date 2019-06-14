/*eslint-env browser*/


// Haalt de elementen op uit de HTML







var bodyElement = document.querySelector('body');

var changeBackgroundColor = function () {
    bodyElement.classList.toggle('bodyColor');
}

bodyElement.addEventListener('click', changeBackgroundColor);
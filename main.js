const firstProductCard = document.querySelector('.product-item');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');
const blueColorHash = '#00ffea';

if (changeColorFirstCardButton && firstProductCard) {
  changeColorFirstCardButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = blueColorHash;
  });
}

const productCards = document.querySelectorAll('.product-item');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#0bee29';

if (changeColorAllCardButton) {
  changeColorAllCardButton.addEventListener('click', () => {
    productCards.forEach((card) => {
      card.style.backgroundColor = greenColorHash;
    });
  });
}

const openGoogleButton = document.querySelector('#open-google');

if (openGoogleButton) {
  openGoogleButton.addEventListener('click', openGoogle);
}

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com', '_blank');
  }
}

const outputLogButton = document.querySelector('#output-console-log');

if (outputLogButton) {
  outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'));
}

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

const title = document.querySelector('.title');

if (title) {
  title.addEventListener('mouseenter', () => {
    console.log(title.textContent);
  });
}

const toggleButton = document.querySelector('#toggle-btn');

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
  });
}
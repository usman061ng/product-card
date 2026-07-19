const productCards = document.querySelectorAll('.product-item');
const greenColorHash = '#15e464';
const blueColorHash = '#e9da11';

productCards.forEach((card) => {
  card.style.backgroundColor = greenColorHash;
});

const firstProductCard = document.querySelector('.product-item');
if (firstProductCard) {
  firstProductCard.style.backgroundColor = blueColorHash;
}

if (firstProductCard) {
  firstProductCard.addEventListener('click', openGoogle);
}

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com', '_blank');
  } else {
    return;
  }
}

const secondProductCard = productCards[1];
if (secondProductCard) {
  secondProductCard.addEventListener('click', () => outputConsoleLog('ДЗ №6'));
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
import { products } from './products.js';

const productsMap = products.reduce((acc, product) => {
  acc.push({ [product.title]: product.description });
  return acc;
}, []);

console.log(productsMap);

function getCardsCount() {
  const input = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(input);

  if (count >= 1 && count <= 5 && !isNaN(count)) {
    return count;
  } else {
    alert("Некорректный ввод! Покажем все карточки по умолчанию (5 шт).");
    return 5;
  }
}

function renderProducts(items) {
  const container = document.getElementById('products-list');
  const template = document.getElementById('card-template');

  container.innerHTML = '';

  items.forEach(product => {
    const clone = template.content.cloneNode(true);

    const img = clone.querySelector('.card__image');
    img.src = product.image;
    img.alt = `Товар ${product.title}`;

    clone.querySelector('.card__skin-type').textContent = product.skinType;
    clone.querySelector('.card__title').textContent = product.title;
    clone.querySelector('.card__description').textContent = product.description;
    clone.querySelector('.card__price-value').textContent = product.price;

    const ingredientsContainer = clone.querySelector('.card__list');
    product.ingredients.forEach(ingredient => {
      const li = document.createElement('li');
      li.className = 'card__list-item';
      li.textContent = ingredient;
      ingredientsContainer.appendChild(li);
    });

    container.appendChild(clone);
  });
}

const cardsCount = getCardsCount();
const selectedProducts = products.slice(0, cardsCount);

renderProducts(selectedProducts);
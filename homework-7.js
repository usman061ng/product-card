function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showWeather("Астана", 30);

const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(300000000);
checkSpeed(1000);
checkSpeed(299792458);

const productName = "Смартфон";
const productPrice = 100000;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const diff = productPrice - budget;
    console.log(`Вам не хватает ${diff}$, пополните баланс`);
  }
}

buyProduct(150000);
buyProduct(80000);

function calculateDiscount(price, discountPercent) {
  const finalPrice = price - (price * (discountPercent / 100));
  console.log(`Итоговая цена со скидкой: ${finalPrice}`);
}

calculateDiscount(100000, 20);

const movieTitle = "Lord of the Rings";
let movieRating = 9.8;
const isWatched = true;
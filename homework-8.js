
// Задание 3: Создание объекта пользователя

const userProfile = {
  firstName: "usman",
  lastName: "kholukhoev",
  email: "usman061ng@gmail.com",
  job: "Разработчик",
  position: "Junior Frontend",
  age: 20,
  country: "Казахстан",
  city: "Астана",
  relationshipStatus: "в поиске"
};


// Задание 4: Создание объекта авто 

const car = {
  brand: "Porsche",
  model: "918 Spyder",
  year: 2015,
  color: "Серебристый",
  transmission: "Робот (PDK)"
};


car.owner = userProfile;



// Задание 5: Функция проверки и добавления максимальной скорости

function checkAndAddMaxSpeed(carObject) {
  if ("maxSpeed" in carObject) {
    return; 
  }
  
  carObject.maxSpeed = 345;
}

checkAndAddMaxSpeed(car);



// Задание 6: Функция для вывода свойства объекта

function getPropertyValue(obj, key) {
  console.log(obj[key]);
}


getPropertyValue(car, "model"); 



// Задание 7: Массив с названиями продуктов

const products = ["Молоко", "Хлеб", "Яйца", "Сыр", "Сахар"];



// Задание 8: Массив классических книг и добавление новой книги

const books = [
  { title: "Преступление и наказание", author: "Ф. Достоевский", year: 1866, coverColor: "Синий", genre: "Роман" },
  { title: "Война и мир", author: "Л. Толстой", year: 1869, coverColor: "Коричневый", genre: "Роман-эпопея" },
  { title: "Джейн Эйр", author: "Ш. Бронте", year: 1847, coverColor: "Бордовый", genre: "Роман" }
];

books.push({
  title: "Анна Каренина",
  author: "Л. Толстой",
  year: 1877,
  coverColor: "Зеленый",
  genre: "Роман"
});



// Задание 9: Второй массив («Властелин колец») и объединение

const lordOfTheRingsBooks = [
  { title: "Братство Кольца", author: "Дж. Р. Р. Толкин", year: 1954, coverColor: "Золотой", genre: "Фэнтези" },
  { title: "Две крепости", author: "Дж. Р. Р. Толкин", year: 1954, coverColor: "Серебряный", genre: "Фэнтези" },
  { title: "Возвращение короля", author: "Дж. Р. Р. Толкин", year: 1955, coverColor: "Черный", genre: "Фэнтези" }
];

const allBooks = [...books, ...lordOfTheRingsBooks];


// Задание 10: Функция с методом map для установки свойства isRare

function addIsRareProperty(booksArray) {
  return booksArray.map((book) => {
    return {
      ...book,
      isRare: book.year > 1950 
    };
  });
}

const booksWithRareStatus = addIsRareProperty(allBooks);

console.log(booksWithRareStatus);
// # Модуль 4. Занятие 8. Перебирающие методы массива

// const array = [3, 2, 3, 4, 5];

// const newArray = array.map(item => item);

// console.log(array);
// console.log(newArray);

// console.log(array === newArray);
// [].map((elem, index, array))
// [].map((elem))
// [].reduce((acc, elem, index, array))
// [].reduce((acc, elem))

// const result = cars.forEach(callback); // undefind

// ## Коллекция объектов для всех примеров с автомобилями

// const rootRef = document.getElementById('root');

// const mappedCars = cars.map(function (car) {
//   // car = { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true }
//   // return car.model;
//   return `<li>${car.make} ${car.model}</li>`;
// });

// rootRef.innerHTML = mappedCars.join('');

// console.log(mappedCars);

// ## Example 1 - Метод map

// Пусть функция `getModels` возвращает массив моделей (поле model) всех
// автомобилей.

// const getModels = cars => cars.map(car => car.model);

// console.log(getModels(cars));

// ## Example 2 - Метод map

// Пусть функция `makeCarsWithDiscount` возвращает новый массив объектов с изменным
// значением свойства `price` в зависимости от переданной скидки.

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map(car => {
//     return {
//       ...car,
//       price: car.price - car.price * discount,
//     };
//     // car.price = car.price * (1 - discount);
//     // // car.price = car.price - car.price * discount;
//     // return car;
//   });
// };

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// ## Example 3 - Метод filter

// Пусть функция `filterByPrice` возвращает массив автомобилей цена которых меньше
// чем значение параметра `threshold`.

// const filterByPrice = (cars, threshold) => {
//   return cars.filter(car => car.price <= threshold);
// };

// const filterByPrice = (cars, threshold) => {
//   return cars.filter(car => car.price <= threshold).map(car => car.model);
// };

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// ## Example 4 - Метод filter

// Пусть функция `getCarsOnSale` возвращает массив автомобилей свойство
// onSale которых true.

// const getCarsOnSale = cars => {
//   return cars.filter(car => {
//     return car.onSale;
//   });
// };

// console.table(getCarsOnSale(cars));

// ## Example 5 - Метод filter

// Пусть функция `getCarsWithType` возвращает массив автомобилей тип которых
// совпадает со значением параметра `type`.

// const getCarsWithType = (cars, type) => {
//   return cars.filter(car => car.type === type);
// };

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

// ## Example 6 - Метод find

// const getCarByModel = (cars, model) => {
//   return cars.find(car => car.model === model);
// };

// console.log(getCarByModel(cars, 'F-150')); // { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true }
// console.log(getCarByModel(cars, 'CX-9')); // { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true }

// ## Example 7 - Метод sort

// Пусть функция `sortByAscendingAmount` возвращает новый массив автомобилей
// отсортированный по возврастанию значения свойства `amount`.

// const sortByAscendingAmount = cars => {
//   return [...cars].sort((a, b) => a.amount - b.amount);
// };

// console.table(sortByAscendingAmount(cars));

// ## Example 8 - Метод sort

// Пусть функция `sortByDescendingPrice` возвращает новый массив автомобилей
// отсортированный по убыванию значения свойства `price`.

// const sortByDescendingPrice = cars => {
//   return [...cars].sort((a, b) => b.price - a.price);
// };

// console.table(sortByDescendingPrice(cars));

// ## Example 9 - Метод sort

// Пусть функция `sortByModel` возвращает новый массив автомобилей отсортированный
// по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от
// значения параметра `order`.

// const sortByModel = (cars, order) => {};

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// ## Example 10 - Метод reduce

// Пусть функция `getTotalAmount` возвращает общее количество автомобилей(значение
// свойств `amount`).

// const getTotalAmount = cars => {
//   return cars.reduce((acc, car) => {
//     console.log('acc', acc);
//     console.log('car.amount', car.amount);
//     return acc + car.amount;
//   }, 0);
// };

// console.log(getTotalAmount(cars));

// ## Example 11 - Цепочки методов

// prettier-ignore
const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
];

// Пусть функция `getAvailableCarNames` возвращает массив моделей автомобилей, но
// только тех, которые сейчас на распродаже.

// const getModelsOnSale = cars => {};

// console.table(getModelsOnSale(cars));

// ## Example 12 - Цепочки методов

// Пусть функция `getSortedCarsOnSale` возвращает массив автомобилей на распродаже
// (свойство onSale), отсортированных по возрастанию цены.

const getSortedCarsOnSale = cars => {
  return cars.filter(car => car.onSale).sort((a, b) => b.price - a.price);
};

console.table(getSortedCarsOnSale(cars));

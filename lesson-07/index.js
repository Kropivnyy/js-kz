// const onGetPositionSuccess = function (position) {
//   console.log(position);
// };
// const onGetPositionError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError,
// );

// function getCurrentPosition(onSuccess, onError) {
//   if (/* Если пользователь предоставил свою геолокацию */) {
//     onSuccess()
//   } else {
//     onError()
//   }
// }

// // function declaration (объявление функции)
// function name(params) {}

// // name()

// // function expresion (функциональное выражение)
// const name = function (params) {};

// // name()

// // function expresion (функциональное выражение)
// const name = (a, b) => a + b;

// // name()

// const foo = () => {
//   return 'Mango';
// };

// const foo = (param, param2) => 'Mango';

// # Модуль 4. Занятие 7. Коллбеки. Стрелочные функции. forEach

// ## Example 1 - Коллбек функции

// Напишите следующие функции:

// - `createProduct(obj, callback)` - принимает объект товара без id, а также
//   колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в
//   свойство `id` и вызывает колбек передавая ему созданный обьект.
// - `logProduct(product)` - коллбек принимающий обьект продукта и логирующий его в
//   консоль
// - `logTotalPrice(product)` - коллбек принимающий обьект продукта и логирующий
//   общую стоимость товара в консоль

// function createProduct(partialProduct, callback) {
//   const newProduct = { ...partialProduct, id: Date.now() };
//   // console.log(newProduct);
//   callback(newProduct);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   // product = { name: '🍋', price: 20, quantity: 5 }
//   // const total = product.price * product.quantity;
//   console.log(product.price * product.quantity);
// }

// // logTotalPrice({ name: '🍋', price: 20, quantity: 5 });

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logTotalPrice);

// ## Example 2 - Коллбек функции

// Добавьте объекту `account` методы `withdraw(amount, onSuccess, onError)` и
// `deposit(amount, onSuccess, onError)`, где первый параметр это сумма операции, а
// второй и третий - колбеки.

// Метод `withdraw` вызывает onError если amount больше TRANSACTION_LIMIT или
// this.balance, и onSuccess в противном случае.

// Метод `deposit` вызывает onError если amount больше TRANSACTION_LIMIT или меньше
// либо равен нулю, и onSuccess в противном случае.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError('Вы превысили лимит!');
//       // Ошибка!!
//     } else if (amount > this.balance) {
//       onError('Недостаточно денег на счету!');
//       // Ошибка!!
//     } else {
//       this.balance -= amount;
//       onSuccess(`Транзакция успешна! На счету осталось ${this.balance}`);
//       // УСПех!
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     // if (amount > TRANSACTION_LIMIT) {
//     //   onError('Вы превысили лимит!');
//     // } else if (amount <= 0) {
//     //   onError('Сумма операции должна быть положительной!');
//     // } else {
//     //   this.balance += amount;
//     //   onSuccess(`Транзакция успешна! На счету стало ${this.balance}`);
//     // }
//     if (amount > TRANSACTION_LIMIT) {
//       onError('Вы превысили лимит!');
//       return;
//     }

//     if (amount <= 0) {
//       onError('Сумма операции должна быть положительной!');
//       return;
//     }

//     this.balance += amount;
//     onSuccess(`Транзакция успешна! На счету стало ${this.balance}`);
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }

// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);

// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// ## Example 3 - Коллбек функции

// Напишите функцию `each(array, callback)`, которая первым параметром ожидает
// массив, а вторым - функцию, которая применится к каждому элементу массива.
// Функция each должна вернуть новый массив, элементами которого будут результаты
// вызова коллбека.

// function each(array, callback) {
//   const newArray = [];
//   for (const number of array) {
//     // console.log(number);
//     const result = callback(number);
//     // console.log(`Было ${number}. Стало ${result}`);
//     newArray.push(result);
//   }
//   return newArray;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// ); // [54, 39, 26, 15, 6]
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// ); // [8, 7, 6, 5, 4]
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// ); // [2, 3, 17, 10, 12]
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// ); // [1, 2, 16, 9, 11]

// ## Example 4 - Стрелочные функции

// Выполните рефакторинг кода используя стрелочные функции.

// const createProduct = (partialProduct, callback) => {
//   const newProduct = { ...partialProduct, id: Date.now() };
//   // console.log(newProduct);
//   callback(newProduct);
// };

// const logProduct = product => {
//   console.log(product);
// };

// const logTotalPrice = product => {
//   // product = { name: '🍋', price: 20, quantity: 5 }
//   // const total = product.price * product.quantity;
//   console.log(product.price * product.quantity);
// };

// // logTotalPrice({ name: '🍋', price: 20, quantity: 5 });

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// ## Example 5 - Стрелочные функции

// Выполните рефакторинг кода используя стрелочные функции.

// ## Example 6 - Инлайн стрелочные функции

// Выполните рефакторинг кода используя стрелочные функции.

// const each = (array, callback) => {
//   const newArray = [];
//   for (const number of array) {
//     // console.log(number);
//     const result = callback(number);
//     // console.log(`Было ${number}. Стало ${result}`);
//     newArray.push(result);
//   }
//   return newArray;
// };

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10)); // [54, 39, 26, 15, 6]
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value))); // [8, 7, 6, 5, 4]
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value))); // [2, 3, 17, 10, 12]
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value))); // [1, 2, 16, 9, 11]

// ## Example 7 - Метод forEach

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

// const logItems = items => {
//   items.forEach((item, index) => {
//     // items[i] === item
//     console.log(`${index + 1} - ${item}`);
//   });
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ## Example 8 - Метод forEach

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// ## Example 9 - Метод forEach

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

const calсulateAverage = (...args) => {
  let total = 0;
  // for (let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }
  args.forEach(argument => {
    // args[i] === argument
    total += argument;
  });
  return total / args.length;
};

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

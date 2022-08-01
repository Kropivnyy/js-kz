// const user = {
//   name: 'Sasha',
//   getName() {
//     console.log('123');
//   },
// };
// user.name;
// user['name'];

// user.getName();

// ОБЪЕКТ
// ключ: значение --- свойство

// const userA = {
//   username: 'mango', // ['username', 'mango']
//   age: 20, // ['age', 20]
// };

// const userB = userA;
// // userB.age = 30;
// userA.age = 30;

// console.log(userA.age, userB.age);

// console.log(Object.keys(userA));
// console.log(Object.values(userA));
// console.log(Object.entries(userA));

// console.log(user.age); // undefined

// # Модуль 3. Занятие 1. Объекты

// ## Example 1 - Основы обьектов

// Напиши скрипт, который, для объекта `user`, последовательно:

// - добавляет поле `mood` со значением `'happy'`
// - заменяет значение `hobby` на `'skydiving'`
// - заменяет значение `premium` на `false`
// - выводит содержимое объекта `user` в формате `ключ:значение` используя
//   `Object.keys()` и `for...of`

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// // user['mood'] = 'happy';
// user.hobby = 'skydiving';
// // user['hobby'] = 'skydiving';
// user.premium = false;

// console.log(user);

// console.log(user.name);
// const propKey = 'name';
// console.log(user[propKey]); // user[propKey] === user['name']

// for (const propKey in user) {
//   // console.log(propKey);
//   // console.log(user[propKey]);
//   console.log(`${propKey}:${user[propKey]}`);
// }

// const objectKeys = Object.keys(user);
// // console.log(objectKeys);
// for (const propKey of objectKeys) {
//   console.log(`${propKey}:${user[propKey]}`);
// }

// ## Example 2 - метод Object.values()

// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для
// суммирования всех зарплат и сохраните результат в переменной sum. Должно
// получиться 390. Если объект `salaries` пуст, то результат должен быть 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const objectValues = Object.values(salaries);
// console.log(objectValues);
// let sum = 0;
// for (const salary of objectValues) {
//   sum += salary;
//   // console.log(salary);
// }

// console.log(sum);

// function getSum(a, b, c) {
//   // a === 23
//   // b === 45
//   // c === undefined
// }
// const a = 23
// const c = 45

// getSum(a, c);

// ## Example 3 - Массив объектов

// Напишите ф-цию `calcTotalPrice(stones, stoneName)`, которая принимает массив
// обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из обьекта

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// // console.log(stones[2]); // { name: 'Сапфир', price: 400, quantity: 7 }

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     // 1 итерация
//     // const stone = { name: 'Изумруд', price: 1300, quantity: 4 }
//     // 2 итерация
//     // const stone = { name: 'Бриллиант', price: 2700, quantity: 3 }
//     // 4 итерация
//     // const stone = { name: 'Щебень', price: 200, quantity: 2 }
//     if (stone.name === stoneName) {
//       // console.log(stone);
//       const sum = stone.price * stone.quantity;
//       return sum;
//     }
//   }
// }

// console.log(calcTotalPrice(stones, 'Бриллиант')); // 8100
// console.log(calcTotalPrice(stones, 'Щебень')); // 400

// ## Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const newTransaction = {
      type: type,
      amount: amount,
    };
    return newTransaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const createdTransaction = this.createTransaction(
      amount,
      Transaction.DEPOSIT,
    );
    this.transactions.push(createdTransaction);
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {},

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {},
};

account.deposit(300);
account.deposit(550);

console.log(account.balance);
console.log(account.transactions);

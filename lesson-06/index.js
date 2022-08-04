// const user = {
//   email: 'mango@mail.com',
//   age: 20,
// };

// const email = 'poly@mail.com';

// console.log(user.age); // 20
// console.log(user.name); // undefined

// const { username } = user; // === const username = user.username
// const { email: userEmail } = user; // === const userEmail = user.email
// console.log(email);

// console.log([1, 3, 5] === [1, 3, 5]);

// const a = [1, 3, 5];
// // const b = a;
// const b = [...a];

// console.log(b === a);

// function getUser(name = 'Sasha') {
//   console.log(name);
// }

// getUser();

// const first = { A: 1, B: 2 };
// const second = { A: 3, C: 4 };
// const third = {
//   A: 5,
//   ...first, // { A: 1, B: 2 }
//   ...second, // { B: 2, A: 3, C: 4 }
//   C: 6, // { B: 2, A: 3, C: 6 }
// };

// function qwe(a, b, c, asf, fas, gas, ...args) {
//   console.log(args);
// }

// qwe({});

// # Модуль 3 Занятие 6. Деструктуризация и rest/spread

// ## Example 1 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// function calcBMI({ weight, height }) {
//   // const { weight, height } = params;

//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Было
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// Стало
// console.log(calcBMI({ weight: '88,3', height: '1.75' }));
// console.log(calcBMI({ weight: '68,3', height: '1.65' }));
// console.log(calcBMI({ weight: '118,3', height: '1.95' }));

// ## Example 2 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Было
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// const users = {
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// };

// // Стало
// printContactsInfo(users);

// ## Example 3 - Глубокая деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// function getBotReport({ companyName, bots: { repairBots, defenceBots } }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Было
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Стало
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// );

// ## Example 4 - Деструктуризация

// Перепиши функцию так, чтобы она принимала объект параметров со свойствами
// `companyName` и `stock` и выводила репорт о количестве товаров на складе любой
// компании.

// function getStockReport({ companyName, stock }) {
//   // console.log(stock); // {........}
//   let total = 0;
//   const stockValues = Object.values(stock);

//   for (const value of stockValues) {
//     total += value;
//   }

//   // console.log(total);
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"

// ## Example 5 - Операция spread

// Напиши функцию `createContact(partialContact)` так, чтобы она возвращала новый
// объект контакта с добавленными свойствами `id` и `createdAt`, а также `list` со
// значением "default" если в `partialContact` нет такого свойства.

// function createContact(partialContact) {
//   // console.log(partialContact);

//   // const newContact = partialContact;
//   // newContact.id = generateId();
//   // newContact.createdAt = Date.now();
//   const newContact = {
//     list: 'default',
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };

//   // if (partialContact.list) {
//   // } else {
//   //   newContact.list = 'default';
//   // }

//   return newContact;
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// ## Example 6 - Операция rest

// Напиши функцию `transformUsername(user)` так, чтобы она возвращала новый обьект
// со свойством `fullName`, вместо `firstName` и `lastName`.

// function transformUsername({ id, email, friendCount, ...names }) {
//   // console.log(names);

//   const newUser = {
//     id,
//     email,
//     friendCount,
//     fullname: `${names.firstName} ${names.lastName}`,
//   };

//   return newUser;
// } // НЕ ОЧЕНЬ ПРАВИЛЬНО!

// function transformUsername({ firstName, lastName, ...user }) {
//   const newUser = {
//     ...user,
//     fullname: `${firstName} ${lastName}`,
//   };

//   return newUser;
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//     list: 'friend',
//   }),
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );

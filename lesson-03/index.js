// const login = prompt('Введите логин');

// switch (login) {
//   case 'Admin':
//     alert('Привет, начальник');
//     break;

//   case 'Sasha':
//   case 'Alla':
//   case 'Andrey':
//     console.log('Привет, работяга');
//     break;

//   default:
//     break;
// }

// # Модуль 2. Занятие 3. Массивы

// ## Example 1 - Базовые операции с массивом

// 1. Создайте массив `genres` с элементами «Jazz» и «Blues».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Выведите в консоль первый элемент массива.
// 4. Выведите в консоль последний элемент массива. Код должен работать для массива
//    произвольной длины.
// 5. Удалите первый элемент и выведите его в консоль.
// 6. Вставьте «Country» и «Reggae» в начало массива.

// const genres = ['Jazz', 'Blues', 'Rap'];
// genres.push('Rock-n-roll');
// // push.genres('rock-n-roll'); Не правильно

// console.log(genres);
// // console.log(genres[0]);
// // console.log('Последний элемент', genres[genres.length - 1]);
// // console.log('at', genres.at(-1));

// // console.log('Shift', genres.shift());
// // console.log(genres.unshift('Country', 'Reggae'));
// genres.splice(0, 1, 'Country', 'Reggae');
// console.log(genres);

// ## Example 2 - Массивы и строки

// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения
// которых хранятся в переменной `values` в виде строки. Значения гарантированно
// разделены пробелом.

// const values = '22 101';
// const valuesArray = values.split(' ');

// const square = Number(valuesArray[0]) * Number(valuesArray[1]);
// console.log(valuesArray); // -> ['8', '11']
// console.log('square', square);

// ## Example 3 - Перебор массива

// Напиши скрипт для перебора массива `fruits` циклом `for`. Для каждого элемента
// массива выведи в консоль строку в формате `номер_элемента: значение_элемента`.
// Нумерация элементов должна начинаться с `1`.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   // 1 итерация
//   // i = 0
//   // fruits[0] = '🍎'
//   // 2 итерация
//   // i = 1
//   // fruits[1] = '🍇'
//   const element = fruits[i];
//   console.log(`${i + 1} - ${element}`);
//   //   console.log(i + 1, element);
// }

// ## Example 4 - Массивы и циклы

// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В
// переменных `names` и `phones` хранятся строки имен и телефонных номеров,
// разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на
// соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArray = names.split(',');
// const phonesArray = phones.split(',');
// console.log(namesArray);
// console.log(phonesArray);

// for (let i = 0; i < namesArray.length; i += 1) {
//   // i = 1
//   // namesArray[1] = William
//   // phonesArray[1] = 89001112233
//   console.log(
//     `Абонент ${namesArray[i]} имеет номер телефона ${phonesArray[i]}`,
//   );
// }

// ## Example 5 - Массивы и строки

// Напиши скрипт который выводит в консоль все слова строки кроме первого и
// последнего. Результирующая строка не должна начинаться или заканчиваться
// пробельным символом. Скрипт должен работать для любой строки.

// const string =
//   'Напиши скрипт который выводит в консоль все слова строки кроме первого';

// const splited = string.split(' ');

// const result = splited.slice(1, splited.length - 1);

// for (let i = 1; i < splited.length - 1; i += 1) {
//   console.log(splited[i]);
// }

// console.log(result);

// ## Example 6 - Массивы и строки

// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит
// ее в консоль.

// const string = 'Welcome to the future';

// const result = [];

// for (let i = 0; i < string.length; i += 1) {
//   result.unshift(string[i]);
//   //   console.log(string[i]);
// }
// for (let i = string.length - 1; i >= 0; i -= 1) {
//   result.push(string[i]);
//   //   console.log(string[i]);
// }

// console.log(result.join(''));

// const splited = string.split('');
// console.log(splited);
// const reversed = splited.reverse();
// console.log(reversed);

// const result = string.split('').reverse().join('');

// console.log(result);

// ## Example 7 - Сортировка массива с циклом

// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве
// элемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// ## Example 8 - Поиск элемента

// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для
// любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min;
// console.log(min); // 1

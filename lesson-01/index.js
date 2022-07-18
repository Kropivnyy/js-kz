// 0
// NaN
// ""
// undefined
// null
// false

// let name = 'Sasha';
// console.log(name);
// name = 'Lesha';
// console.log(name);
// name = 'Olya';
// console.log(name);
// let age = 22;
// age = 44;
// console.log(age);

// Number('25,7px') // NaN
// Number.parseInt('257px') // 257
// Number.parseFloat('25.7.6px') // 25.7

// # Модуль 1. Занятие 1. Переменные, типы и операторы

// ## Example 1 - Математические операторы

// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log('Здесь будет сумма:', total);
// const diff = apples - grapes;
// console.log('А здесь - разница:', diff);

// ## Example 2 - Комбинированные операторы

// Замени выражение переопределения комбинированным оператором `+=`.

// let students = 100;
// students = students + 50;
// students += 50;
// console.log(students);

// ## Example 3 - Приоритет операторов

// Разбери приоритет операторов в инструкции присвоения значения переменной
// `result`.

// const result = 108 + (223 - 2) * 5;
// console.log(result);

// ## Example 4 - Класс Math

// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения
// переменной `value`. Используй методы `Math.floor()`, `Math.ceil()` и
// `Math.round()`. Проверь что будет в консоли при значениях `27.3` и `27.9`.

// const value = 27.49999;
// const roundedValue = Math.floor(value);
// console.log('Floor:', Math.floor(value));
// console.log('Ceil:', Math.ceil(value));
// console.log('Round:', Math.round(value));

// ## Example 5 - Шаблонные строки

// Составь фразу с помощью шаблонных строк `A has B bots in stock`, где A, B -
// переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const totalBots = repairBots + defenceBots;
// const message = `${companyName} has ${totalBots} bots in stock`;
// const message2 = `${totalBots} is available now`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// console.log(message2);

// ## Example 6 - Методы строк и чейнинг

// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого
// необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных `weight` и `height`, но не как числа, а в
// виде строк (специально для задачи). Нецелые числа могут быть заданы в виде
// `24.7` или `24,7`, то есть в качестве разделителя дробной части может быть
// запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// let weight = '88,3';
// let height = '1.75';
// height = Number.parseFloat(height);

// // weight = weight.replace(',', '.');
// weight = Number.parseFloat(weight.replace(',', '.'));

// console.log('weight', weight);

// const bmi = weight / Math.pow(height, 2);
// const normalizedBmi = bmi.toFixed(1);
// console.log(normalizedBmi); // 28.8

// ## Example 7 - Операторы сравнения и приведение типов

// Каким будет результат выражений?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// ## Example 8 - Логические операторы

// Каким будет результат выражений?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// ## Example 9 - Значение по умолчанию и оператор нулевого слияния

// Отрефактори код так, чтобы в переменную `value` присваивалось значение
// переменной `incomingValue`, если оно не равно `undefined` или `null`. В
// противном случае должно присваиваться значение `defaultValue`. Проверь работу
// скрипта для слепдующих значений переменной `incomingValue`: null, undefined, 0,
// false. Используй оператор `??` (nullish coalescing operator).

// const incomingValue = NaN;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log('value', value);

// ## Example 10 - Опертор % и методы строк

// Напиши скрипт который переведёт значение `totalMinutes` (количество минут) в
// строку в формате часов и минут `HH:MM`.

// - 70 покажет 01:10
// - 450 покажет 07:30
// - 1441 покажет 24:01

// const totalMinutes = 70;

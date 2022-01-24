'use strict';

// Обьявление Переменных 

// 1

// let age = 20; Изменяющаяся переменная

// 2

// const name = 'Vlad' Постоянная переменная (лучше использовать везде) В JS как таковых постоянных нет

// Изменение постоянной 

// const obj = {
//      a:50 
// }

// obj.a = 70;

// console.log(obj.a);

// Наглядно видно что постоянная изменяется

// 3 

// var - устроевший вариант (лучше не использовать) Проблема в том, что переменная существует еще до объвления

// ------------------------------------------------------------------

// Строгий режим 

// "use strict" - строгий или соверменный режим (убирает некоторые ошибки в коде)

// ------------------------------------------------------------------



// Классификация типов данных 

// Простые типы данных 

// const number = 10;  Тип данных - Number

// const word = 'table';  Тип данных - String

// const isTrue = true;  Тип данных - boolean

// const idk = null;  Тип данных - null

// const ids = undefined;  Тип данных - undefined

// Тип данных - Symbol

// Тип данных - BigInt

// Объекты 

// const obj = {
//      surname: 'Kharin',
//      age: 35,
//      isMarried: false    
// }

// Обычный обьект со своими методам

// const array = [1, 2, 3, 4, 5]

// Массив с данными 



// ------------------------------------------------------------------

// Общение с пользователем 

// Вся инфа от пользователя будет приходить строкой (string)

// console.log

// console.log('lol');

// prompt 

// const question = prompt('How are you?', 'good');

//confirm

// const result = confirm('Are you here?');

// Интерполяция

// const category = 'toys';

// console.log('https://someurl.com/' + category)  Это конкатенация строк

// Лучший способ через бектики ``

// const classWorkNumber = 1;

// console.log(`Классная работа по счету ${classWorkNumber}`);

// ------------------------------------------------------------------

// Операторы Js

// Инкремент и декримент 

// let incr = 10;
// let decr = 10;

// Постфинксная форма (Сначало возвращает старое значение, потом возвращает новое)

// incr++;  Оператор инкремента (увелечение на 1)

// decr--;  Оператор дикремента (уменьшение на 1)

// Префиксная форма (Сразу возвращает новое значение )

// ++incr;  Оператор инкремента (увелечение на 1)

// --decr;  Оператор дикремента (уменьшение на 1)


// Оператор остатка %

// console.log(5%2);

// Операторы присваивания, сравнения и строгого сравнения

// Оператор присваивания

// const something = 'purple'  Используется оператор присваивания 

// Оператор сравнения 

// console.log( 2 * "2" == 4);  Используется оператор сравнения (не смотря на разные типы данных)

// Оператор строгого сравнения 

// console.log( 2 * 2 === 4);  Используется оператор строгого сравнения ( только одинаковые типы данных)

// Оператор && (И) и оператор || (ИЛИ)

// && Оператор работает только тогда, когда два или больше подопотных являються правдой

// || Оператор работает тогда, когда один из варинтов будет правдой


// Оператор отрицания ! ( меняет значение на противоположное)

// ------------------------------------------------------------------

// Условие 

//  if ( условие ) {
//       код  выполняется, если условие верно
//  } else {
//      код выполниться, если условие не верно   
//  }

// Условие с помощью тернатрного оператора (?)

// ( условие ) ? (код выполняется, если условие верно) : (код выполниться, если условие не верно);

// Конструкция switch 
// Идет всегда на строгое сравнение

//  switch (обьект, который мы будем сравнивать) {
//      case (условие) : 
//               код выполняется, если условие верно;
//               break;
//      default:
//               код выполняется по дефолту;
//  }


// ------------------------------------------------------------------

// Циклы 

// let a = 1;

//  while (условие) {
//      код выполняется, пока условие верно
//  }

// while (a < 10) {
//     console.log(a);
//     a++;
// }

//  do {
//      код выполняется, пока условие верно   
//  }
//  while (условие)

// do {
//     console.log(a);
//     a++;
// }
// while (a < 10);

//  for (let i = 1; i < 8; i++){
//      код выполняется, пока условие верно 
//  }

// ------------------------------------------------------------------

// Функций 

//  function название (аргумент) {
//      код выполняется                      - это function declararion
//  } Главное ее вызвать

//  let название = function () {
//      код выполняется                      - это function expression
//  }

//  Еще есть стрелочная функия () => {}

// ------------------------------------------------------------------

// Методы и свойства строк и чисел

// Строки

// Свойство length - что посмотреть длину строки

// Метод toUpperCase() - в врехний регистр

// Метод toLowerCase() - в нихний регистр

// Метод indexOf(аргумент) - показывает с какого индеха начинается аргумент

// Метод slice(начальный аргумент, конечный аргумент) - вырезает аргумент и его можно дальше использовать

// Метод substr (начальный аргумент, кол-во символов) - вырезает аргумент и его можно дальше использовать

// Числа

// Метод Math.round(аргумент) - округляет до ближайшего целого числа

// Метод parseInt(аргумент) - переводит в другую систему исчисления 

// Метод parseFloat(аргумент) - переводит в дестичную систему исчисления

// ------------------------------------------------------------------

// Callabck - функций 

// Callback позволяет нам быть уверенным в том что определныйй код не начнет свое исполнение до того момента пока другой код не завершит свое исполнение

// ------------------------------------------------------------------

// Обьекты, деструктуризация обьектов

// const options = {
//     name: 'test',
//     width: 1024,                   // - создание обьекта
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");    // - создание методов в обьекте
//     }
// };

// const {border, bg} = options.colors; // - деструктуризация обьекта
// console.log(border);

// options.makeTest();
// console.log(Object.keys(options).length); // - создать массив из ключей обьекта и узнать длину обьекта

// delete anotherObj.name; - удаление ключа и значения в обьекте
// console.log(anotherObj);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`${i} : ${options[key][i]}`)
//             counter++
//         } 
//     } else {
//         console.log(`${key} : ${options[key]}`)
//         counter++;
//     }
    
// }

// console.log( counter);

// const obj = new Object(); - альтернативное создание обьекта

// ------------------------------------------------------------------

// Массивы и псевдомассивы

// const arr = [1, 26, 13, 6, 8]; // - создание массива

// arr.sort(compareNum);

// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr.pop();  - удаляет последний элемент массива и возвращает его

// arr.push(8);  - прибавляет элемент в конец массива

// arr.shift();  - удаляет первый элемент массива и возвращает его

//arr.unshift(8); - прибавляет элемент в начало массива

// Перебор массивов
// for ( let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for ( let value of arr) {
//     console.log(value);
// }

// arr.forEach((item, index, arr) => {
//     console.log(`${item}, ${index}, ${arr}`)
// });

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products);
// console.log(products.join('; '));
// console.log(arr);

// У пседомассивов нет методов

// ------------------------------------------------------------------

// Передача по ссылке или по значению, Spread оператор

// let a = 5;
// let b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // передает ссылку на обьект

// copy.a = 10; // модифицируя нашу копию, модифицируем наш основной обьект

// console.log(copy);
// console.log(obj);

// function copy (mainObj) {
//     let objCopy = {};

//     for ( let key in mainObj) {
//         objCopy[key] = mainObj[key];    // Сделали поверхностную копию
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5, 
//     c: {                            
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers); // Поверхностная копия

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add)); // Добавляем один обьект к другому

// const clone = Object.assign({}, add);

// clone.d = 20;

// numbers.d = 35;

// console.log(add);
// console.log(clone);

// console.log(numbers);


// const oldArray = ['a', 'b', 'c'];

// const newArray = oldArray.slice();

// newArray.push('d');
// newArray[1] = 'lol';

// console.log(newArray);
// console.log(oldArray);


// const video = ['YT', 'VO', 'RT'];
// const blogs = ['WP', 'LJ', 'BL'];
// const internet = [...video, ...blogs, 'YX', 'XUI'];

// console.log(internet); // Разворачивает массив оператор Spread

// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b', 'c'];

// const newArray = [...array];

// const obj = {
//     one: 1,
//     two: 2
// };

// const newObj = {...obj};

// console.log(newObj);

// ------------------------------------------------------------------

// Основы ООП , прототипно-ориентировнное наследование

// let str = 'some';

// let strObj = new String(str);

// console.log(typeof(strObj))
// console.log(typeof(str))

// console.dir([1,2,3,4,5]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const josh = Object.create(soldier);


// Object.setPrototypeOf(josh, soldier);

// console.log(josh.armor);

//-------------------------------------------------------------------

// Динамическая типизация

// To String


// 1)

// console.log(typeof(String(null)));
// console.log(typeof(String(5)));

// 2) Конкотинация

// console.log(typeof(5 + ''));

// const num = 5;

// console.log('https://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';

// To Number

// 1)

// console.log(typeof(Number(null)));
// console.log(typeof(Number(5)));

// 2) Унарный плюс

// console.log(typeof(+'5'));
// let answ = +prompt('Hello', '');

// 3) С помощью методов

// console.log(typeof(parseInt('15px', 10)));

// To boolean

// false 

// 0, '', null, indefined, NaN

// let switcher = null;
// switcher = 1; 

// if (switcher) {
//     console.log('Working');
// }
    
// 2) 

// console.log(typeof(Boolean(null)));
    
// 3)

// console.log(typeof(!!'4444'));

// Практика

// Какое будет выведено значение: 
// let x = 5; console.log( x++ ); // x = 5;
//  Чему равно такое выражение: 
//  console.log([ ] + false - null  + true ); Будет NaN 
// // Что выведет этот код: 
// let y = 1; let x = y = 2; console.log(x); x = 2
// // Чему равна сумма 
// console.log([ ] + 1 + 2) Выведет 12
// // Что выведет этот код: 
// console.log( '1'[0] );
// // Чему равно
//  console.log((2 && 1 &&  0 && undefined)) ; запинаеется на лжи
// // Есть ли разница между выражениями?
// //  !!( a && b ) || (a && b)
// // Что выведет этот код: 
// console.log( null || 2 && 3 || 4 ); 

// a = [1, 2, 3]; b = [1, 2, 3]; 
// // Правда ли что a == b ?
// // Что выведет этот код: 
// console.log( +'Infinity&' ); 
// // Верно ли сравнение: &
// 'Ёжик&'; 'яблоко'
// // Чему равно 
// 0 || '' || 2 || undefined || true || falsе 

// ------------------------------------------------------------------

// События на мобильных устройствах

//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

// ------------------------------------------------------------------

// Async, defer, динамические скрипты

// defer - загружает скрипт в фоновом режим, когда странциа построется скрипт запуститься
// async - загружается в фоновом режим, запускается когда загрузиться

// ------------------------------------------------------------------

// Работа с датами

// const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// ------------------------------------------------------------------

// Функции-конструкторы

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`hello ${this.name}`);
//     }
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел`);
// }
// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 30);

// console.log(alex);
// console.log(ivan);

// ivan.hello();
// alex.hello();
// alex.exit();
// ivan.exit();

// ------------------------------------------------------------------

// Контекст вызова. This

// function showThis(a, b) {
//     console.log(this);
//     function sum () {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(2, 6);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this.b);
//     }
// }

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'Josh'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count (num) {
//     return this*num;
// }

// const double = count.bind(2);

// console.log(double(3));
// console.log(double(13));

// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов обьекта - сам обьект
// 3) this в конструкторах и классах - это новый экземпляр обьекта
// 4) Ручная привезка this: call, apply, bind

// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     console.log(this);
// });

// const obj = {
//     num: 5,
//     sayNumber: function () {
//         const say = () => {
//             console.log(this);
//         }
//         say();
//     }
// }

// obj.sayNumber();

// const double = a => a * 2;

// console.log(double(4));

// ------------------------------------------------------------------

// Классы ES6

// class Rectangle {
//     constructor (height, wight) {
//         this.height = height;
//         this.wight = wight;
//     }

//     calcArea() {
//         return this.height * this.wight;
//     }
// }

// class ColoredReactangleWithText extends Rectangle {
//     constructor(height, wight, text, bgColor) {
//         super();
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст ${this.text}, цвет : ${this.bgColor}`);
//     }
// }

// const div = new ColoredReactangleWithText(25, 10, 'Hello wrold', 'red');
// div.showMyProps();

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());

// ------------------------------------------------------------------

// Rest оператор и параметры по умолчанию (ES6)

// const log = function(a, b, ...rest) {
//     console.log(a, b, rest);
// }

// log(1, 2, 3, 4, 5, 6, 7, 8);

// function calcOurDouble(number, basis) {
//     console.log(number * basis);
// }

// calcOurDouble(3, 5)

// ------------------------------------------------------------------

// JSON формат передачи данных, глубокое клонирование объектов

// const persone = {
//     name: 'Alex',
//     tel: '+744444444',
//     parents: {
//         mom: 'Olga',
//         dad: 'Mike'
//     }
// };

// const clone = JSON.parse(JSON.stringify(persone)); // -- Глубокое клонирование обьекта (важно)

// clone.parents.mom = 'Ann';

// console.log(clone);
// console.log(persone);

// ------------------------------------------------------------------


// Promise (ES6)

// console.log('Запрос данных...');

// const req = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('Подготовка данных...');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product); // Положительный резултат
//     }, 2000);
// });


// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data
// }).then(data => {
//     console.log(data)
// }).catch(() => {
//     console.error('Произошла ошибка...');
// }).finally(() => {
//     console.log('finally...');
// });


// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('OK');
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('race');
// });

    


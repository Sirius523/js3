'use strict';
// function calculateArea(r){
//     let area;
//     if(r<=0){
//         return 0;
//     }else{
//         area = Math.PI * r *r;
//         return area;
//     }
// }
// let radius = 2.2;
// let theArea = calculateArea(radius);
// console.log('The area is: ' + theArea);

// Дана строка 'abc!def!'. Замените все ! на '@' 
// с помощью глобального поиска и замены.
// let txt = 'abc!def!';
// console.log(txt.replace(/!/g, '@'));


// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' 
// тремя разными способами (через substr, substring, slice).
// let txt = 'aaa bbb ccc';
// console.log(txt.substr(4,3));
// console.log(txt.substring(4,7));
// console.log(txt.slice(4,7));

// Дана строка 'js'. Сделайте из нее строку 'JS'.




// Дана строка 'я люблю JS!'. Найдите количество 
// символов в этой строке.


// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные: years, myDog, guests
// Функции: dogYears, makeTea, secret
// Встроенные функции: dogYears(myDog, 4), makeTea(guests, 'Earl Grey'), secret()
// Аргументы: (myDog, 4), (guests, 'Earl Grey'), ()
// Параметры:(dogname, age), (cups, tea), secret()
// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();


// Дана строка 'JS'. Сделайте из нее строку 'js'.
let txt = 'JS';
console.log(txt.toLowerCase());


// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
let text3 = 'я люблю JS!';
console.log(text3.substr(2, 5), text3.substr(8,2));
console.log(text3.substring(2, 7), text3.substring(8,10));
console.log(text3.slice(2, 7), text3.slice(8,10));




// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.
let text1 = 'я люблю JS!';
console.log(text1.indexOf('люблю'))

// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.
let txt1 = 'js самый лучший язык в мире';
let n = 5;
if (txt1.length > n) {
    let result = txt1.slice(0, n);
    console.log(result + '...');
}
else {
    let result = txt1;
    console.log(result)
}


// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.
let text = 'Я-люблю-JS!';
console.log(text.replace(/-/g, '!'));



// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.
let text2 = 'я люблю JS';
console.log(text2.split(' '));

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.
let txt2 = 'привет мир';
console.log(txt2.split(''));

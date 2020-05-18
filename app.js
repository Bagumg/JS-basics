/*
1. Объясните почему код даёт именно такие результаты?
Подсказка. Чтобы лучше разобраться возьмите этот код и запустите в отладчике в браузере со
включенными точками остановки.
*/

// Пример 1
let a = 1, b = 1, c, d;
// Инкрементируем переменную a равную 1. Инкремент возвразает значение переменной a и увеличивает на 1. Затем присваеваем полученное значение переменной c
c = ++a;
alert(c);

// Пример 2
// Инкрементируем переменную b равную 1, только уже постфикс. Сначала возвращается значение переменной b и присваевается переменной d, затем значение b увеличивается на 1
d = b++;
alert(d);

//Пример 3
// После примера 1, значение переменной a стало равно 2. Здесь мы складываем 2 и значение a увеличенное на 1 т.е. 3 и присваеваем переменной c
c = 2 + ++a;
alert(c);

// Пример 4
// После примера 2 значение b стало равно 2. Складываем 2 + 2 и присваеваем переменной d. Затем увеличиваем значение переменной b на 1 
d = 2 + b++;
alert(b);

alert(a); //Пременная a инкрементировалась до операции сложения
alert(b); // А переменная b инкрементировалась после операции сложения поэтому и разные результаты в пердыдущих выводах.


/*
2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
(описать последовательность действий).
*/

/*
1) a = 2
2) (a *= 2) присваевание с умножением. Запись равноценна: a = a * 2
3) 1 + 4 = 5
4) x = 5
*/
let a = 2;
let x = 1 + (a *= 2);
alert(a); // 4
alert(x); // 5


/*
3. Объявить две переменные a и b и задать им целочисленные произвольные начальные
значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
Подсказка, чтобы сделать последний пункт можно также попробовать погуглить по запросу
«получить знак числа javascript»
*/

let a = Number((prompt('Введите первое число:')))
let b = Number((prompt('Введите второе число:')))

if (a >= 0 && b >= 0) {
    console.log(a - b);
}
else if (a < 0 && b < 0) {
    console.log(a * b);
}
else if (a * b < 0) {
    console.log(a + b);
}
// т.к. у нас остались варианты только с тем, где переменные разных знаков, то можно просто вот так
//else {
//    console.log(a + b)
//}


/*
4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return.
*/

function mathAdd(a, b){
    return a + b;
}

function mathSub(a, b){
    return a - b;
}

function mathDiv(a, b){
    return a / b;
}

function mathMul(a, b){
    return a * b;
}

//mathAdd(2, 4);
//mathSub(2, 4);
//mathDiv(2, 4);
//mathMul(2, 4);


/*
5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

function mathOperation(a, b, simbol){
    switch(simbol){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
    }
}

//mathOperation(2, 4, '+');
//mathOperation(2, 4, '-');
//mathOperation(2, 4, '/');
//mathOperation(2, 4, '*');


/*
6**. (Сложное задание, требует времени и возможно гугления, делайте по желанию.)
Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
числа.
*/

let money = prompt('Введите, сколько у вас денег: ');
let lastSimbol = money.charAt(money.length - 1);
// 10, 11, 12 и.т.д. всегда будет "рублей" делаем проверку на предпоследнюю цифру, если 1, то возвращаем фразу с "рублей"
if (money.charAt(money.length - 2) == 1) {
    console.log(`Ваша сумма в ${money} рублей успешно зачислена.`);
}
// Проверяем последнюю цифру, исходя из этого выдаём соответствующую фразу.
else {
    switch (lastSimbol) {
        case '1':
            console.log(`Ваша сумма в ${money} рубль успешно зачислена.`);
            break;
        case '2':
        case '3':
        case '4':
            console.log(`Ваша сумма в ${money} рубля успешно зачислена.`);
            break;
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            console.log(`Ваша сумма в ${money} рублей успешно зачислена.`);
    }
}
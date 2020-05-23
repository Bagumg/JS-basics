'use strict';


/*
2. С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

for (let i = 0; i < 10; i++)
    if (i == 0) {
        console.log(`${i} - это ноль`);
    }
    else if (i % 2 == 0) {
        console.log(`${i} - четное число`);
    }
    else {
        console.log(`${i} - нечетное число`);
    };


/*
3. Выведите в консоль значения, указанные рядом с комментариями:
*/

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);


/*
4. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
*/

const product = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (item) {
    console.log(item.price * 1.15);
}
);


/*
5. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1) Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2) Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0
*/

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

function isPhoto (item) {
    if ("photos" in item && item.photos.length > 0) {
        return item;
    }
}

let productsPhoto = products.filter(isPhoto);
console.log(productsPhoto);

function comparePrice (a, b) {
    return a.price - b.price;
}

let productsSorted = products.sort(comparePrice);
console.log(productsSorted);


/*
6. (По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла for числа от 0 до 9,
НЕ используя тело цикла.
*/

for (let i = 0; i < 10; console.log(i++)){};


/*
7. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
*/

for (let i = 0; i < 21; console.log('x'.repeat(i++))){};
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    mlist = document.querySelector('.promo__interactive-list'),
    btn = document.querySelector('button'),
    input = document.querySelector('.adding__input');

let trash;
listSorting();

adv.forEach(item => item.remove());

document.querySelector('.promo__genre').textContent = 'драма';
document.querySelector('.promo__bg').style.backgroundImage = "url('img/bg.jpg')"

// const ol = document.createElement('ol');
// ol.classList.add('promo__interactive-list');
// movieDB.movies.sort().forEach((item, i) => {
//     ol.innerHTML += `<li class='promo__interactive-item'>${i+1}. ${item}</li>`; 
// });

// document.querySelector('.promo__interactive-list').replaceWith(ol);



function listSorting() {
    mlist.innerHTML = '';

    movieDB.movies.sort().forEach((item, i) => {
        mlist.innerHTML += `<li class='promo__interactive-item'>${i+1}. ${item}
    <div class="delete"></div>
</li>`;
    });
    trash = document.querySelectorAll('.delete');

    trash.forEach(item => {
        item.addEventListener('click', (e) => {
            let movieInd = e.target.parentElement.textContent.slice(0, 1);
            console.log(movieInd);
            movieDB.movies.splice((movieInd - 1), 1);   
            listSorting();         
        });
    });

}



btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value.length < 21) {
        movieDB.movies.push(input.value.toUpperCase());
    } else {
        movieDB.movies.push(input.value.toUpperCase().slice(0, 21) + '...');
    }
    listSorting();
});

// trashBtns.forEach(item => item.addEventListener('click', () => {
//     item.parentElement.remove()
// }));

// document.querySelectorAll('.delete').forEach(item => {
//     item.addEventListener('click', () => {
//         item.parentElement.remove();

//     });
// });

// document.querySelectorAll('.delete').forEach(item => {
//     item.addEventListener('click', () => {
//         let movieInd = item.parentElement.textContent.slice(0, 1);
//         movieDB.movies.splice((movieInd - 1), 1);
//         listSorting();
//     });
// });

// trash.forEach(item => {
//     item.addEventListener('click', (e) => {
//         let movieInd = e.target.parentElement.textContent.slice(0, 1);
//         console.log(movieInd);
//         movieDB.movies.splice((movieInd - 1), 1);
//         listSorting();
//     });
// });

const checkInp = document.querySelector('input[type="checkbox"]');
checkInp.addEventListener('click', () => {
    if (checkInp.checked == true) {
        alert('fadf');
    }
});
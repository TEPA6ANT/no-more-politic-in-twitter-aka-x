// ==UserScript==
// @name         Удалить вкладку "Что происходит" и кнопку "Обзор"
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Удаляет вкладку "Что происходит" и кнопку "Обзор" из X/Twitter
// @author       TEPA6ANT and Perplexy AI
// @match        https://twitter.com/*
// @match        https://x.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Функция для удаления элемента
    /*function removeWhatHappensTab() {
        const headings = document.querySelectorAll('h1, h2'); // Находим все заголовки
        headings.forEach(heading => {
            if (heading.innerText.includes("Что происходит")) { // Проверяем текст заголовка
                const section = heading.closest('section'); // Находим ближайший родительский элемент section
                if (section) {
                    section.style.display = 'none'; // Скрываем элемент
                }
            }
        });
    }*/

    function removeWhatHappensTab() {
        // Находим ссылку на /explore/tabs/for-you
        const forYouLink = document.querySelector('a[href="/explore/tabs/for-you"]');
        if (forYouLink) {
            // Находим ближайший родительский <section>
            const section = forYouLink.closest('section');
            if (section) {
                section.style.display = 'none';
            }
        }
    }

    function removeExploreButton() {
        // Находим все ссылки, ведущие на /explore
        const exploreLinks = document.querySelectorAll('a[href="/explore"]');
        exploreLinks.forEach(link => {
            link.style.display = 'none';
        });
    }

    function removeElements() {
        removeWhatHappensTab();
        removeExploreButton();
    }

     // Создаем наблюдатель за изменениями в DOM
    const observer = new MutationObserver(removeElements);

    // Настройки наблюдателя
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Запускаем функцию при первой загрузке страницы
    removeElements()
})();

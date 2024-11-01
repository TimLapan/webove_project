function checkQuiz() {
    let score = 0;

    // Правильные ответы для вопросов 1-3 (радио)
    const correctAnswersRadio = [1, 1, 1]; // Индексы правильных ответов (0 - неверно, 1 - верно)

    // Проверяем правильность ответов на вопросы 1-3
    for (let i = 1; i <= 3; i++) {
        const selected = document.querySelector(`input[name="question${i}"]:checked`);
        if (selected && parseInt(selected.value) === correctAnswersRadio[i - 1]) {
            score++;
        }
    }

    // Правильные ответы для вопросов 4-6 (текстовые)
    const correctAnswersText = [
        'model.evaluate()', // Вопрос 4
        'Softmax',          // Вопрос 5
        'Sequential'        // Вопрос 6
    ];

    // Проверяем правильность ответов на вопросы 4-6
    for (let i = 4; i <= 6; i++) {
        const userAnswer = document.querySelector(`input[name="question${i}"]`).value.trim();
        if (userAnswer.toLowerCase() === correctAnswersText[i - 4].toLowerCase()) {
            score++;
        }
    }

    // Формируем сообщение в зависимости от результата
    const resultText = `Odpovedali ste správne na ${score} z 6 otazok`;
    const resultElement = document.getElementById('result');

    // Изменяем цвет текста в зависимости от количества правильных ответов
    if (score === 6) {
        resultElement.textContent = "Výborne. " + resultText;
        resultElement.style.color = "green";  // Зеленый цвет для идеального результата
    } 
    else if (score >= 3) {
        resultElement.textContent = "Nie je to zlé, ale mohlo by to byť lepšie. " + resultText;
        resultElement.style.color = "yellow";  // Зеленый цвет для идеального результата
    }
    else {
        resultElement.textContent = resultText;
        resultElement.style.color = "red";  // Красный цвет для неполного результата
    }
}

function copyCode(button) {
    // Находим родительский элемент .code-container
    const codeContainer = button.closest('.code-container');
    // Находим элемент <code> внутри контейнера
    const codeText = codeContainer.querySelector('code').textContent; // Используем textContent для сохранения форматирования
    // Копируем текст в буфер обмена
    navigator.clipboard.writeText(codeText).then(() => {
        // Изменяем текст кнопки на "Скопировано!" и возвращаем через 2 секунды
        button.textContent = "Copied!";
        setTimeout(() => {
            button.textContent = "Copy";
        }, 2000);
    }).catch(err => {
        console.error("Ошибка копирования:", err);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#left_navigation_menu .nav-link");
    const sections = document.querySelectorAll("section");

    function setActiveLink() {
        let index = sections.length;

        // Определение активного раздела на основе прокрутки
        while (--index && window.scrollY + 250 < sections[index].offsetTop) {}

        // Удаление активного класса со всех ссылок и добавление только нужной
        navLinks.forEach((link) => link.classList.remove("active"));
        if (navLinks[index]) {
            navLinks[index].classList.add("active");
        }
    }

    // Вызов функции при прокрутке
    window.addEventListener("scroll", setActiveLink);
});
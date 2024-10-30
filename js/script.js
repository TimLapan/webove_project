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
        'Adam'              // Вопрос 6
    ];

    // Проверяем правильность ответов на вопросы 4-6
    for (let i = 4; i <= 6; i++) {
        const userAnswer = document.querySelector(`input[name="question${i}"]`).value.trim();
        if (userAnswer.toLowerCase() === correctAnswersText[i - 4].toLowerCase()) {
            score++;
        }
    }

    // Формируем сообщение в зависимости от результата
    const resultText = `Вы ответили правильно на ${score} из 6 вопросов.`;
    const resultElement = document.getElementById('result');

    // Изменяем цвет текста в зависимости от количества правильных ответов
    if (score === 6) {
        resultElement.textContent = "Хорошая работа! " + resultText;
        resultElement.style.color = "green";  // Зеленый цвет для идеального результата
    } else {
        resultElement.textContent = resultText;
        resultElement.style.color = "red";  // Красный цвет для неполного результата
    }
}

function copyCode(button) {
    // Находим родительский элемент .code-container
    const codeContainer = button.closest('.code-container');
    // Находим элемент <code> внутри контейнера
    const codeText = codeContainer.querySelector('code').textContent;

    // Копируем текст в буфер обмена
    navigator.clipboard.writeText(codeText).then(() => {
        // Изменяем текст кнопки на "Скопировано!" и возвращаем через 2 секунды
        button.textContent = "Скопировано!";
        setTimeout(() => {
            button.textContent = "Копировать";
        }, 2000);
    }).catch(err => {
        console.error("Ошибка копирования:", err);
    });
}
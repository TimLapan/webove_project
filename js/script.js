function checkQuiz() {
    const answers = [1, 1, 1];  // Правильные ответы
    let score = 0;

    // Проверяем правильность каждого ответа
    for (let i = 1; i <= answers.length; i++) {
        const selected = document.querySelector(`input[name="question${i}"]:checked`);
        if (selected && parseInt(selected.value) === answers[i - 1]) {
            score++;
        }
    }

    // Формируем сообщение в зависимости от результата
    const resultText = `Вы ответили правильно на ${score} из ${answers.length} вопросов.`;
    const resultElement = document.getElementById('result');

    // Изменяем цвет текста в зависимости от количества правильных ответов
    if (score === 3) {
        resultElement.textContent = "Хорошая работа! " + resultText;
        resultElement.style.color = "green";  // Зеленый цвет для идеального результата
    } else {
        resultElement.textContent = resultText;
        resultElement.style.color = "red";  // Красный цвет для неполного результата
    }
}
function copyCode(button) {
    // Находим родительский элемент и код для копирования
    const codeContainer = button.previousElementSibling.previousElementSibling;
    const codeText = codeContainer.textContent;

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
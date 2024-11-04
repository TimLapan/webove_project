document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-container");

    images.forEach((image, index) => {
        image.addEventListener("mouseenter", () => {
            image.classList.add("hover");

            images.forEach((img, i) => {
                if (i < index) {
                    // Смещаем изображения с индексом меньше текущего вверх
                    img.classList.add("move-up");
                } else if (i > index) {
                    // Смещаем изображения с индексом больше текущего вниз
                    img.classList.add("move-down");
                }
            });
        });

        image.addEventListener("mouseleave", () => {
            image.classList.remove("hover");

            images.forEach(img => {
                img.classList.remove("move-down");
                img.classList.remove("move-up");
            });
        });
    });
});


// Показываем/скрываем панель навигации при прокрутке страницы
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0"; // Показываем панель
  } else {
    document.getElementById("navbar").style.top = "-50px"; // Скрываем панель
  }
}


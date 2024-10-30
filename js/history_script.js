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




// Funkcia na zmenu velkosti pisma
function changeFontSize(factor) {
    const body = document.body; // Cele Body element
    // dostat aktualnu velkost pisma
    const currentFontSize = window.getComputedStyle(body).fontSize;
    const newSize = parseFloat(currentFontSize) + factor;
    body.style.fontSize = `${newSize}px`;
}

// funkcnosť tlacidiel na zvacsenie alebo zmensenie velkosti pisma
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('increase-font').addEventListener('click', () => changeFontSize(2));
    document.getElementById('decrease-font').addEventListener('click', () => changeFontSize(-2));

    //Ctrl + Sipky
    document.addEventListener('keydown', (event) => {

        if (event.ctrlKeytrl && event.key === 'ArrowUp') {
            // Ctrl + sipka hore pre zvacsenie pisma
            changeFontSize(2);
            event.preventDefault(); // Prevent default browser behavior

        } else if (event.ctrlKey && event.key === 'ArrowDown') {
            // Ctrl + sipka dole pre zmensenie pisma
            changeFontSize(-2);
            event.preventDefault();
        }
    });

    // Shift + koliesko myši
    document.addEventListener('wheel', (event) => {
        if (event.shiftKey) { // Check if the Shift key is pressed
            if (event.deltaY < 0) {
                // Skrollovanie hore zvacsuje velkost
                changeFontSize(2);
            } else if (event.deltaY > 0) {
                // Skrollovanie dole zmensuje velkost
                changeFontSize(-2);
            }
            event.preventDefault();
        }
    });
});

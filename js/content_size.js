


// Funkcia na zmenu velkosti pisma
function changeFontSize(factor) {
    const body = document.body; // Target the entire body element
    // Get the current font size of the body
    const currentFontSize = window.getComputedStyle(body).fontSize;
    const newSize = parseFloat(currentFontSize) + factor;
    body.style.fontSize = `${newSize}px`;
}

// funkčnosť tlačidiel na zväčšenie alebo zmenšenie veľkosti písma
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('increase-font').addEventListener('click', () => changeFontSize(2));
    document.getElementById('decrease-font').addEventListener('click', () => changeFontSize(-2));

    // funkčnosť možnosti Ctrl + šípka hore/dole
    document.addEventListener('keydown', (event) => {

        if (event.ctrlKey && event.key === 'ArrowUp') {
            // Ctrl + sipka hore pre zvacsenie pisma
            changeFontSize(2);
            event.preventDefault(); // Prevent default browser behavior

        } else if (event.ctrlKey && event.key === 'ArrowDown') {
            // Ctrl + sipka dole pre zmensenie pisma
            changeFontSize(-2);
            event.preventDefault(); // Prevent default browser behavior
        }
    });
    document.addEventListener('keydown', (event) => {

        if (event.ctrlKey && event.key === 'ArrowUp') {
            // Ctrl + sipka hore pre zvacsenie pisma
            changeFontSize(2);
            event.preventDefault(); // Prevent default browser behavior

        } else if (event.ctrlKey && event.key === 'ArrowDown') {
            // Ctrl + sipka dole pre zmensenie pisma
            changeFontSize(-2);
            event.preventDefault(); // Prevent default browser behavior
        }
    });
    // Shift + koliesko myši pre zmenu velkosti pisma
    document.addEventListener('wheel', (event) => {
        if (event.shiftKey) { // Check if the Shift key is pressed
            if (event.deltaY < 0) {
                // Scrolling up, increase font size
                changeFontSize(2);
            } else if (event.deltaY > 0) {
                // Scrolling down, decrease font size
                changeFontSize(-2);
            }
            event.preventDefault(); // Prevent default scrolling behavior
        }
    });
});

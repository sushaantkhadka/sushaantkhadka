document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('canvasWhite');
    const alphabet = '♩♪♫♬♭$♦️♣️☘️♠️';  

    function createFloatingLetter(letter) {
        const span = document.createElement('span');
        span.classList.add('letter');
        span.textContent = letter;
        
        const size = Math.random() * 2 + 1; // Random font size between 1rem and 3rem
        span.style.fontSize = `${size}rem`;

        span.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        span.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration between 5s and 10s

        container.appendChild(span);

        // Remove the letter after the animation ends to avoid clutter
        span.addEventListener('animationend', () => {
            span.remove();
        });
    }

    function startFloatingLetters() {
        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            createFloatingLetter(alphabet[randomIndex]);
        }, 500); // Adjust the interval to control the frequency of letters
    }

    startFloatingLetters();
});
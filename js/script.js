document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('check');
    const background = document.getElementById('canvas');
    const background2 = document.getElementById('canvasWhite');
    const audio = document.getElementById('myAudio');
    const body = document.body;

    function enableDarkMode() {
        body.classList.add('dark-mode');
        background.style.display = 'flex';
        background2.style.display = 'flex';
        document.getElementById('designation').innerHTML = "Frontend Dev";
        document.getElementById('frontend').style.display = 'flex';
        document.getElementById('uiux').style.display = 'none';
        audio.src = 'static/music/rock.mp3';
        audio.play();
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
        background.style.display = 'none';
        background2.style.display = 'none';
        document.getElementById('designation').innerHTML = "UiUx Designer";
        document.getElementById('uiux').style.display = 'flex';
        document.getElementById('frontend').style.display = 'none';
        audio.src = 'static/music/soft.mp3';
        audio.play();
    }

    // Load dark mode state from localStorage and apply it
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
        toggleButton.checked = true;
    } else {
        disableDarkMode();
        toggleButton.checked = false;
    }

    // Event listener for the toggle button
    toggleButton.addEventListener('change', function() {
        if (toggleButton.checked) {
            enableDarkMode();
            localStorage.setItem('darkMode', 'enabled');
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});

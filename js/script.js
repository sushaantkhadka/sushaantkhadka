document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('check');
    const background = document.getElementById('canvas')
    const background2 = document.getElementById('canvasWhite')

    const audio = document.getElementById('myAudio');
    const body = document.body;


    

    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.checked = true;
        background.style.display = 'flex';
        background2.style.display = 'flex';
        document.documentElement.style.setProperty('--global-color', '#00f73f');
        document.getElementById('designation').innerHTML="Frontend Dev";
        audio.src= 'static/music/rock.mp3';
        audio.play();

    }

    toggleButton.addEventListener('change', function() {
        if (toggleButton.checked) {
            body.classList.add('dark-mode');
            background.style.display = 'flex';
            background2.style.display = 'flex';
            document.documentElement.style.setProperty('--global-color', '#00f73f');
            document.getElementById('designation').innerHTML="Frontend Dev"
            audio.src= 'static/music/rock.mp3';
            audio.play();
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            background.style.display = 'none';
            background2.style.display = 'none';
            document.documentElement.style.setProperty('--global-color', '#FF5733');
            document.getElementById('designation').innerHTML="UiUx Designer"
            audio.src= 'static/music/soft.mp3';
            audio.play();
            localStorage.setItem('darkMode', 'disabled');
        }
    });

});




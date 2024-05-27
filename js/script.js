document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('check');
    const background = document.getElementById('canvas')
    const body = document.body;

    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.checked = true;
        background.style.display = 'flex';
        document.documentElement.style.setProperty('--global-color', '#00f73f');
        document.getElementById('designation').innerHTML="Frontend Dev"

    }

    toggleButton.addEventListener('change', function() {
        if (toggleButton.checked) {
            body.classList.add('dark-mode');
            background.style.display = 'flex';
            document.documentElement.style.setProperty('--global-color', '#00f73f');
            document.getElementById('designation').innerHTML="Frontend Dev"
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            background.style.display = 'none';
            document.documentElement.style.setProperty('--global-color', '#FF5733');
            document.getElementById('designation').innerHTML="UiUx Designer"
            localStorage.setItem('darkMode', 'disabled');
        }
    });




    const musicPlay = document.getElementById('checkboxInput');
    const audio = document.getElementById('myAudio');

    if (localStorage.getItem('musicPlaying') === 'false') {
        musicPlay.checked = true;
        audio.pause()
    }else{
        audio.play();
    }


    musicPlay.addEventListener('change', function() {
        if (musicPlay.checked) {
            audio.pause();
            localStorage.setItem('musicPlaying', 'false');
        } else {
            audio.play();
            localStorage.setItem('musicPlaying', 'true');
        }
    });

});




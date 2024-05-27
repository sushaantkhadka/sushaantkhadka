document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('check');
    const body = document.body;

    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.checked = true;
    }

    toggleButton.addEventListener('change', function() {
        if (toggleButton.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
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




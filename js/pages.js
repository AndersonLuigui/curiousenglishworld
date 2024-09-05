document.addEventListener('DOMContentLoaded', () => {

    // COM ESSE LINK TODA PÁGINA HTML PEGARÁ A ESTILIZAÇÃO DO BOOTSTRAP
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css';
    document.head.appendChild(link);

    // TRADUZIR ESCONDER
    let traduzir = document.querySelector('#traduzir');
    let esconder = document.querySelector('#esconder');
    const box1 = document.querySelector('.box1');

    traduzir.addEventListener('click', (e) => {
        box1.style.display = 'block'; 
        traduzir.style.display = 'none';
        esconder.style.display = 'block';
    })

    esconder.addEventListener('click',(e)=> {
        box1.style.display = 'none';
        traduzir.style.display = 'block';
        esconder.style.display = 'none';  
    })

    // PLAYER DE ÁUDIO
    const audio = document.getElementById('myAudio');
    const playButton = document.getElementById('playButton');
    const progressBar = document.getElementById('progressBar');
    const currentTimeElement = document.getElementById('currentTime');
    const durationTimeElement = document.getElementById('durationTime');
    let isPlaying = false;

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    audio.addEventListener('loadedmetadata', () => {
        durationTimeElement.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        currentTimeElement.textContent = formatTime(audio.currentTime);
    });

    playButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playButton.innerHTML = '<i class="bi bi-play-fill"></i>';
        } else {
            audio.play();
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
        }
        isPlaying = !isPlaying;
    });

    document.querySelector('.progress-container').addEventListener('click', (e) => {
        const progressContainer = e.currentTarget;
        const clickX = e.offsetX;
        const width = progressContainer.clientWidth;
        const newTime = (clickX / width) * audio.duration;
        audio.currentTime = newTime;
    });


    // Pesquisar palavra no Google Tradutor
    const searchWordButton = document.getElementById('searchWordButton');
    const wordInput = document.getElementById('wordInput');

    searchWordButton.addEventListener('click', () => {
        const word = wordInput.value.trim();
        if (word) {
            const googleTranslateUrl = `https://translate.google.com/?sl=auto&tl=pt&text=${encodeURIComponent(word)}&op=translate`;
            window.open(googleTranslateUrl, '_blank');
        } else {
            alert('Por favor, digite uma palavra para pesquisar.');
        }
    });
});
document.getElementById('habilidade1').addEventListener('click', function () {
    atualizarVideo('https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_P1.webm');
});

document.getElementById('habilidade2').addEventListener('click', function () {
    atualizarVideo('https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_P1.webm');
});

document.getElementById('habilidade3').addEventListener('click', function () {
    atualizarVideo('https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_P1.webm');
});

function atualizarVideo(urlVideo) {
    const video = document.getElementById('video');
    video.src = `${urlVideo}?autoplay=1&mute=1&controls=0&modestbranding=1`;
}

function trocarVideo(videoURL) {
    const video = document.getElementById('video');
    video.src = `${videoURL}?autoplay=1&mute=1&controls=0&modestbranding=1`;
}

    const videoContainer = document.getElementById('video-container');
    if (videos[habilidade]) {
        videoContainer.innerHTML = `
            <iframe width="100%" height="315" src="${videos[habilidade]}" frameborder="0" allowfullscreen></iframe>
        `;
    }


document.getElementById('habilidade1').addEventListener('click', function () {
    playVideo('URL_do_Video_Habilidade1');
});

document.getElementById('habilidade2').addEventListener('click', function () {
    playVideo('URL_do_Video_Habilidade2');
});

document.getElementById('habilidade3').addEventListener('click', function () {
    playVideo('URL_do_Video_Habilidade3');
});

function playVideo(videoURL) {
    const video = document.getElementById('video');
    video.src = `${videoURL}?autoplay=1&mute=1&controls=0&modestbranding=1`;
}

function trocarFundo(skin) {
    const background = document.querySelector('.background-image img');
    
    const skins = {
        skin1: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_1.jpg',
        skin2: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_2.jpg',
        skin3: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_11.jpg',
        skin4: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_21.jpg',
    };

    if (skins[skin]) {
        background.src = skins[skin];
    }
}


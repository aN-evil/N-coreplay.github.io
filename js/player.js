let currentMusic = 0;

const music = document.querySelector('#audio');


const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const seekBar = document.querySelector('.seek-bar');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-time');
const playBtm = document.querySelector('.play');
const forwardBtm = document.querySelector('.next');
const backwardBtm = document.querySelector('.back');


playBtm.addEventListener('click',() => {
    if(music.paused || music.currentTime<=0){
        music.play();
        playBtm.classList.remove('bi bi-play-circle');
        playBtm.classList.add('bi bi-pause-circle');
    }
    else{
        music.pause();
        playBtm.classList.remove('bi bi-pause-circle');
        playBtm.classList.add('bi bi-play-circle');
    }
})
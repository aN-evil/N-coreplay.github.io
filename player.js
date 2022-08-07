let currentMusic = 0;

const music = document.querySelector('#audio');


const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const seekBar = document.querySelector('.seek-bar');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-time');
const playBtm = document.querySelector('#play');
const forwardBtm = document.querySelector('#next');
const backwardBtm = document.querySelector('#back');


const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;
}

setMusic(0);

playBtm.addEventListener('click',() => {
    disk.classList.toggle('play');
    if(music.paused || music.currentTime<=0){
        music.play();
        playBtm.classList.remove('bi-play-circle');
        playBtm.classList.add('bi-pause-circle');
    }
    else{
        music.pause();
        playBtm.classList.remove('bi-pause-circle');
        playBtm.classList.add('bi-play-circle');
    }
})
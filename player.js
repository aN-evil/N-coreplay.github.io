let currentMusic = 0;

const music = document.querySelector('#audio');


const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const seekBar = document.querySelector('.seek-bar');
const disk = document.querySelector('.disk');
const diskPause = document.querySelector('.disk.play');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-time');
const playBtm = document.querySelector('#play');
const forwardBtm = document.querySelector('#next');
const backwardBtm = document.querySelector('#back');
const volume = document.querySelector('.sound-bar');
const volBtm = document.querySelector('#vol');


const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;
    seekBar.max = music.duration;
    console.log(music.duration);
    setTimeout(() =>{
        seekBar.max = music.duration;
        musicDuration.innerHTML = formaTime(music.duration);
    }, 1000);
}

setMusic(0);

const formaTime = (Time) => {
    let min = Math.floor(Time / 60);
    if(min < 10){
        min = `0${min}`;
    }
    let sec = Math.floor(Time % 60);
    if(sec < 10){
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}

playBtm.addEventListener('click',() => {
    
    if(music.paused || music.currentTime<=0){
        music.play();
        playBtm.classList.remove('bi-play-circle');
        playBtm.classList.add('bi-pause-circle');
        // disk.classList.toggle('play');
    }
    else{
        music.pause();
        playBtm.classList.remove('bi-pause-circle');
        playBtm.classList.add('bi-play-circle');
        // diskPause.classList.toggle('play');
    }
})

setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formaTime(music.currentTime)
    if(Math.floor(music.currentTime) == Math.floor(seekBar.max)){
        forwardBtm.click();
    }
}, 500);

 seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
 })

 const playMusic = () => {
    if(music.paused || music.currentTime<=0){
        music.play();
        playBtm.classList.remove('bi-play-circle');
        playBtm.classList.add('bi-pause-circle');
        // diskPause.classList.toggle('play');
    }
 }

 forwardBtm.addEventListener('click', () =>{
    if(currentMusic >= songs.length - 1){
        currentMusic = 0;
    } else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
    // disk.classList.toggle('play');
 })

 backwardBtm.addEventListener('click', () =>{
    if(currentMusic <= 0){
        currentMusic = songs.length -1;
    } else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
    // disk.classList.toggle('play');
 })

volume.addEventListener('change', function(e){
    music.volume = e.currentTarget.value / 100;
})


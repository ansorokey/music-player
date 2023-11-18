let progress = document.querySelector('#progress');
let song = document.querySelector('#song')
let playBtn = document.querySelector('#play-pause')

// when the song's detail and file information is loaded:
song.onloadedmetadata = function() {
    console.log(song.metadata);
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    // if the button is a pause button:
    if(playBtn.classList.contains('fa-pause')) {
        song.pause(); // stop the song
        // replace the fa icon witha play icon
        playBtn.classList.remove('fa-pause');
        playBtn.classList.add('fa-play');
    } else {
        // do the opposite
        song.play();
        playBtn.classList.remove('fa-play');
        playBtn.classList.add('fa-pause');
    }
}

// Whenever the song is playing:
if(song.play) {
    // update the value of the progres bar every half second
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}
// how does this run repeatedly?
// it isn't part of a function and should oly be read and passed once.
// there's something about how a browser reads a script that I don't fully know

// when the user changes the progress bar:
progress.onchange = function() {
    // play the song at that point
    song.play();
    song.currentTime = progress.value;
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
}

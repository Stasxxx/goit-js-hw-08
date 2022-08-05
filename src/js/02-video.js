import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const sevedTime = localStorage.getItem("videoplayer-current-time");
let parsedTime;

if (sevedTime) {
    parsedTime = JSON.parse(sevedTime);
} else {
    parsedTime = 0;
}

player.on('timeupdate', onPlay);
    
function onPlay(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
    
};


player.setCurrentTime(parsedTime.seconds)
    .then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
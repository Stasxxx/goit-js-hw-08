import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', onPlay);
    
        function onPlay (data) {
    // data is an object containing properties specific to that event
};

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
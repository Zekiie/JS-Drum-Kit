function playSound(e) {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
        key  = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition (e) {
    this.classList.remove("playing")
}

var keys = document.querySelectorAll('.key');
    keys.forEach(function(key){
    key.addEventListener('transitionend', removeTransition );
});

window.addEventListener('keydown', playSound);

/* Create a class for sound object with key mapping */
class Sounds {
    constructor(keyName, soundName, soundPath) {
        this.keyName = keyName;
        this.soundName = soundName;
        this.soundPath = soundPath;
    }
}
//Create dynamic list of sound and keys map
const soundsList = [
    new Sounds('A', 'clap', './assets/sounds/clap.wav'),
    new Sounds('S', 'hihat', './assets/sounds/hihat.wav'),
    new Sounds('D', 'kick', './assets/sounds/kick.wav'),
    new Sounds('F', 'openhat', './assets/sounds/openhat.wav'),
    new Sounds('G', 'boom', './assets/sounds/boom.wav'),
    new Sounds('H', 'ride', './assets/sounds/ride.wav'),
    new Sounds('J', 'snare', './assets/sounds/snare.wav'),
    new Sounds('K', 'tom', './assets/sounds/tom.wav'),
    new Sounds('L', 'tink', './assets/sounds/tink.wav'),
]

//Play sound for the pressed key
function playSound (e) {
    //Find if element with that key is present
    const key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
    // //Find if audio with that key is present
    // const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //Find if audio with that key is present
    const audio = document.querySelector('audio');
    //Stop code execution if audio with that key is not found
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.src = key.getAttribute('data-src');
    audio.play();
}

//Handle transition animation when audio is played
function afterSoundPlayed (e) {
    //Wait for max animation to finish before removing
    if (e.propertyName !== "transform") return;

    //So, now it have finished the transition, let's remove it
    this.classList.remove('playing');
}

//When DOM is loaded add UI for sound keys
document.addEventListener('DOMContentLoaded', function (e) {
    //Access the body tag
    const body = document.querySelector("body");
    //Access the keys div, will contain all the sound divs
    const keys = document.querySelector("div.keys");

    //For each sounds in dynamic sound list append the UI div
    soundsList.forEach((sounds) => {
        //Create an empty div element
        const div = document.createElement('div');
        //Assign key class to the element
        div.classList.add('key');
        //Set custom key attribute
        div.setAttribute('data-key', sounds.keyName.charCodeAt());
        div.setAttribute('data-src', sounds.soundPath);
        //Add UI for key and sound name
        div.innerHTML = `<kbd>${sounds.keyName}</kbd><span class="sound">${sounds.soundName}</span>`;
        //Assign transition end listener to remove the class once done
        div.addEventListener('transitionend', afterSoundPlayed);
        //Add the div to parent div
        keys.appendChild(div);

        // //Add sound source for each sound as well
        // //Create sound element
        // const audio = document.createElement('audio');
        // //Set custom key attribute
        // audio.setAttribute('data-key', sounds.keyName.charCodeAt());
        // //Set source of the audio
        // audio.setAttribute('src', sounds.soundPath);
        // body.appendChild(audio);
    });
    //Add sound source for each sound as well
    //Create sound element
    const audio = document.createElement('audio');
    body.appendChild(audio);
});

//Add event listener when a key is press and if it is present in the display
document.addEventListener('keydown', playSound);
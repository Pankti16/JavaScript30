window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

const words = document.querySelector('.words');
let p = document.createElement('p');
words.appendChild(p);

function showTranscript(e) {
  console.log(e.results);
  const transcript = Array.from(e.results)
  .map(result => result[0])
  // .map(result => emojify(result.transcript))
  .map(result => replaceEmoji(result.transcript))
  .join('');

  // const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
}

recognition.addEventListener('result', showTranscript);
recognition.addEventListener('end', recognition.start);

recognition.start();
const pressed = [];
const secretCode = 'doofus';

function handleSecretCode (e) {
  pressed.push(e.key);
  //splice array from right to the length of the secret code
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    cornify_add();
  }
}

window.addEventListener('keyup', handleSecretCode);
const allCheckboxes = document.querySelectorAll('.inbox input[type="checkbox"');

let lastChecked;

function handleClick (e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    allCheckboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

allCheckboxes.forEach((checkbox) => checkbox.addEventListener('click', handleClick));
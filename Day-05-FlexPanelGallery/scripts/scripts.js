//Get all panels
const panels = document.querySelectorAll('.panel');

//Toggle the open class with panel class for size animation
function toggleOpen() {
  /** Start: Comment this if want to open more than one at the same time **/
  //Get all other panels with open class and remove the class from them
  document.querySelectorAll('.panel.open').forEach((panel) => {
    //Don't do anything if it is a this class
    if (panel.dataset.id !== this.dataset.id) {
      panel.classList.remove('open');
    }
  });
  /** End: Comment this if want to open more than one at the same time **/
  this.classList.toggle('open');
};

//Toggle the open-active class with panel class for text animation
function toggleOpenActive(e) {
  if (e.propertyName.includes('flex')) this.classList.toggle('open-active');
};

//Add click and transition events to each panel
panels.forEach((panel) => {
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleOpenActive);
});
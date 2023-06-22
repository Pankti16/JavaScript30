//Get all the inputs that are inside of div with class .controls
const inputs = document.querySelectorAll('.controls input');

//On change of the input values update root variables
function handleChange () {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

//Assign change listener to each input
inputs.forEach(myInput => {
    myInput.addEventListener('change', handleChange);
    if (myInput.type === 'range') {
        myInput.addEventListener('mousemove', handleChange);
    }
});
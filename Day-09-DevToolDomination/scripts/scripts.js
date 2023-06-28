const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('Hello');

    // Interpolated
    console.log('Hi I am a %s string', 'test');

    // Styled
    console.log('%c I am styling', 'font-size: 24px; background:blue');

    // warning!
    console.warn('Oh No');

    // Error :|
    console.error('Shit!');

    // Info
    console.info('Crocodiles eat 3-4 people per year');

    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'That is wrong!');

    // clearing
    // console.clear();

    // Viewing DOM Elements
    console.dir(p);

    // Grouping together
    dogs.forEach((dog) => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('Wes');
    console.count('West');
    console.count('Steve');
    console.count('Steve');
    console.count('wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

    console.table(dogs);

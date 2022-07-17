console.log('Sample JavaScript #5 HW #17');


let container = null;
let prevIndicator = null;

const createContainer = function () {
  const elem = document.createElement('div');
  elem.setAttribute('id', 'carousel');
  elem.setAttribute('class', 'carousel');
  document.querySelector('body').append(elem);

  container = document.querySelector('#carousel');
};

const createSlides = function (n) {
  let slidesContainer = document.createElement('ul');
  slidesContainer.setAttribute('class', 'slides');

  for (let i = 0; i < n; i++) {
    let slideItem = document.createElement('li');
    let slideLink = document.createElement('a');

    slideItem.setAttribute('class', i === 0 ? 'slides__item active' : 'slides__item');

    slideLink.setAttribute('href', '#');
    slideItem.append(slideLink);
    slidesContainer.append(slideItem);
  };

  container.append(slidesContainer);
};

const createIndicators = function (n) {
  indicatorsContainer = document.createElement('div');
  indicatorsContainer.setAttribute('class', 'indicators');

  for (let i = 0; i < n; i++) {
    indicatorsItem = document.createElement('span');
    indicatorsItem.setAttribute('data-slide-to', i);
    indicatorsItem.setAttribute('class', i === 0 ? 'indicators__item active' : 'indicators__item');
    indicatorsContainer.append(indicatorsItem);
  }
  container.append(indicatorsContainer);
}


const createControls = function () {
  let containerControls = document.createElement('div');
  containerControls.setAttribute('class', 'controls');

  for (let i = 0; i < 3; i++) {
    let controlsItem = document.createElement('div');
    let controlsIcons = document.createElement('i');
    const defItemsClass = 'controls__item';
    const defIconClass = 'fas';

    if (i === 0) {
      controlsItem.setAttribute('class', `${defItemsClass} controls__prev`);
      controlsIcons.setAttribute('class', `${defIconClass} fa-chevron-left`);
    } if (i === 1) {
      controlsItem.setAttribute('class', `${defItemsClass} controls__next`);
      controlsIcons.setAttribute('class', `${defIconClass} fa-chevron-right`);
    } if (i === 2) {
      controlsItem.setAttribute('class', `${defItemsClass} controls__pause`);
      controlsIcons.setAttribute('class', `${defIconClass} fa-play`);
    }
    containerControls.append(controlsItem);
    controlsItem.append(controlsIcons);
  }
  container.append(containerControls);
}

const createStyle = function () {
  let styleContainer = document.createElement('style');

  let styleCode = `
  .controls,
  .slides {
    position: relative;
  }  
  .indicators {
    display: flex;
  }
  .indicators__item {
    display: block;    
  }`;

  styleContainer.innerHTML = styleCode;
  container.append(styleContainer);

};



const indicatorsHandler = function (event) {



  if (event.target.classList.contains('indicators__item')) {
    event.target.style.backgroundColor = 'red';

    if (prevIndicator !== null) prevIndicator.removeAttribute('style');

    prevIndicator = event.target;
  }

}

function setListener() {
  let indicatorsContainer = document.querySelector('div.indicators');
  indicatorsContainer.addEventListener('click', indicatorsHandler);
}


function createCarousel(n = 5) {
  //createContainer();
  container = document.querySelector('#carousel');
  createSlides(n);
  createIndicators(n);
  createControls();
  createStyle();
  setListener();
}

createCarousel(5);
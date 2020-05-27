var experience = [
  {
    title: 'Junior R&D Engineer',
    companyName: 'Cubyn',
    startDate: '',
    endDate: '',
    description: '',
  },
  {
    title: 'JS/TS Full-Stack Developer',
    companyName: '',
    startDate: '',
    endDate: '',
    description: '',
  },
  {
    title: 'JS Full-Stack Developer',
    companyName: '',
    startDate: '',
    endDate: '',
    description: '',
  },
];

var background = [
  {
    schoolName: '',
    diploma: 'test1',
    firstYear: 0,
    lastYear: 1,
  },
  {
    schoolName: '',
    diploma: 'test2',
    firstYear: 0,
    lastYear: 1,
  },
];

function init() {
  renderJobs();
  renderBackground();
}

function renderJobs() {
  var experienceUl = document.getElementById('experience');
  for (let i = 0; i < experience.length; i++) {
    var newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(experience[i].title));
    experienceUl.appendChild(newLi);
    experienceUl.style.listStyleType = 'none';
  }
}

function renderBackground() {
  var backgroundUl = document.getElementById('background');
  for (let i = 0; i < background.length; i++) {
    var newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(background[i].diploma));
    backgroundUl.appendChild(newLi);
    backgroundUl.style.listStyleType = 'none';
  }
}

window.onload = init();

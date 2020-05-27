var experience = [
  {
    jobTitle: 'job1',
    companyName: '',
    jobEntryDate: '',
    jobEndDate: '',
    description: '',
  },
  {
    jobTitle: 'job2',
    companyName: '',
    jobEntryDate: '',
    jobEndDate: '',
    description: '',
  },
  {
    jobTitle: 'job3',
    companyName: '',
    jobEntryDate: '',
    jobEndDate: '',
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
    newLi.appendChild(document.createTextNode(experience[i].jobTitle));
    experienceUl.appendChild(newLi);
  }
}

function renderBackground() {
  var backgroundUl = document.getElementById('background');
  for (let i = 0; i < background.length; i++) {
    var newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(background[i].diploma));
    backgroundUl.appendChild(newLi);
  }
}

window.onload = init();

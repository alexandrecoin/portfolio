var experience = [
  {
    title: 'Junior R&D Engineer',
    companyName: 'Cubyn',
    startDate: '2019-11',
    endDate: '2020-02',
    description: 'omg',
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

var works = [
  {
    imgUrl: './assets/mysg.png',
    company: 'My-Serious-Game (Tours)',
    job: 'Back-end for IFSImulation',
  },
];

function init() {
  renderJobs();
  renderBackground();
  // renderWorks();
}

function renderJobs() {
  var experienceUl = document.getElementById('experience');
  for (let i = 0; i < experience.length; i++) {
    var newLi = document.createElement('li');
    let expTemplate1 = `
      ${experience[i].title} • ${experience[i].companyName} • ${
      experience[i].startDate
    } - ${experience[i].endDate}
    ${experience[i].description}
    `;
    newLi.appendChild(document.createTextNode(expTemplate1));
    newLi.style.marginBottom = '0.5em';
    experienceUl.appendChild(newLi);
    experienceUl.style.listStyleType = 'none';
  }
}

function renderBackground() {
  var backgroundUl = document.getElementById('background');
  for (let i = 0; i < background.length; i++) {
    var newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(background[i].diploma));
    newLi.style.marginBottom = '0.5em';
    backgroundUl.appendChild(newLi);
    backgroundUl.style.listStyleType = 'none';
  }
}

function renderWorks() {
  var element = document.getElementById('cards');
  for (let i = 0; i < works.length; i++) {
    var img = document.createElement('img');
    img.src = works[i].imgUrl;
    var imgDiv = document.getElementById('imagesDiv');
    imgDiv.appendChild(img);
  }
}

window.onload = init();

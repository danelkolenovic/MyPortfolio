let body = document.body;

let prevScrollpos = window.pageYOffset;
let hideHeader = document.getElementById('hide-header');

window.onscroll = headerMove = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    hideHeader.style.top = '0';
  } else {
    hideHeader.style.top = '-100px';
  }
  prevScrollpos = currentScrollPos;
};

window.onpagehide;

let navContainer = document.getElementById('navMenus');
let btns = navContainer.getElementsByClassName('btns');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    let current = document.getElementsByClassName('active');

    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }

    this.className += ' active';
    setTimeout(() => {
      hideHeader.style.top = '-90px';
    }, 800);
  });
}

let showBtn = document.getElementById('showMLBtn');
let invisibleCards = document.querySelector('.invisCards');

showBtn.addEventListener('click', () => {
  showBtn.classList.add('font');
  if (invisibleCards.className === 'invisCards invisible') {
    invisibleCards.className = 'invisCards visible';
    showBtn.innerHTML = 'Show Less...';
  } else {
    invisibleCards.className = 'invisCards invisible';
    showBtn.innerHTML = 'Show More...';
  }
});

let sidebarShowBtn = document.querySelector('.sidebar-open-btn');
let closeButton = document.getElementsByClassName('close')[0];
let sidebar = document.getElementById('myModal');
let btnsside = document.querySelectorAll('.btnsside');

for (let i = 0; i < btnsside.length; i++) {
  btnsside[i].addEventListener('click', () => {
    setTimeout(() => {
      hideHeader.style.top = '-90px';
    }, 800);
  });

  for (let i = 0; i < btnsside.length; i++) {
    btnsside[i].addEventListener('click', () => {
      sidebar.style.display = 'none';
    });
  }
}

sidebarShowBtn.onclick = function () {
  sidebar.style.display = 'block';
};

closeButton.onclick = function () {
  sidebar.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == sidebar) {
    sidebar.style.display = 'none';
  }
};

let lightmode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById('theme-switch');

const enableLightmode = () => {
  document.body.classList.add('lightmode');
  localStorage.setItem('lightmode', 'active');
};

const disableLightmode = () => {
  document.body.classList.remove('lightmode');
  localStorage.setItem('lightmode', null);
};

if (lightmode === "active") enableLightmode();

themeSwitch.addEventListener("click", () => {
  lightmode = localStorage.getItem('lightmode');
  lightmode !== "active" ? enableLightmode() : disableLightmode();
});

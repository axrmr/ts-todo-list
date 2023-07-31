import getRefs from '../getRefs';

const refs = getRefs();

const toggleTranslate = () => {
  refs.regForm.classList.toggle('slide-left');
  refs.logInForm.classList.toggle('slide-left');

  const divs = document.querySelectorAll('.intro-btns-wrap > div');
  divs.forEach(item => {
    item.classList.toggle('slide-top');
  });
};

refs.introLogInBtn.addEventListener('click', toggleTranslate);
refs.introRegBtn.addEventListener('click', toggleTranslate);

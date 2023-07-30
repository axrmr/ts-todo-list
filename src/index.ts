import './scripts/login';
import './scripts/register';

import getRefs from './scripts/getRefs';

const refs = getRefs();

const toggleFormVisibility = () => {
  refs.registerForm.classList.toggle('translate-left');
  refs.logInForm.classList.toggle('translate-left');

  const introBtnsWrap = document.querySelectorAll('.intro-btns-wrap > div');
  introBtnsWrap.forEach(item => {
    item.classList.toggle('translate-top');
  });
};

refs.introLogInBtn.addEventListener('click', toggleFormVisibility);
refs.introRegisterBtn.addEventListener('click', toggleFormVisibility);

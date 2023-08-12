import getRefs from '../getRefs';
import toggleClass from '../toggleClass';

const refs = getRefs();

refs.heroBtnsList.addEventListener('click', toggleTranslate);

function toggleTranslate(e: any) {
  const target = e.target;
  if (target.tagName !== 'BUTTON') return;

  if (target.id === 'back-to-login') {
    toggleClass('slide-right', refs.resetPswWrap, refs.regForm, refs.logInForm);
    refs.heroBtnsList.classList.remove('back-to-login-visible');
    refs.heroBtnsList.classList.add('reg-visible');
  } else if (target.id === 'register') {
    toggleClass('slide-left', refs.resetPswWrap, refs.regForm, refs.logInForm);
    refs.heroBtnsList.classList.add('login-visible');
  } else if (target.id === 'login') {
    toggleClass('slide-left', refs.resetPswWrap, refs.regForm, refs.logInForm);
    refs.heroBtnsList.classList.remove('login-visible');
    refs.heroBtnsList.classList.add('reg-visible');
  }
}

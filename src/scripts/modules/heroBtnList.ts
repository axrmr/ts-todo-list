import addClass from '../addClass';
import getRefs from '../getRefs';
import removeClass from '../removeClass';

const refs = getRefs();

refs.heroBtnList.addEventListener('click', toggleTranslate);

function toggleTranslate(e: any) {
  const target = e.target;

  if (target.tagName !== 'BUTTON') return;

  if (target.id === 'back-to-login') {
    addClass('reg-visible', refs.heroBtnList);
    removeClass('slide-right', refs.resetPswWrap, refs.regForm, refs.logInForm);
    removeClass('back-to-login-visible', refs.heroBtnList);
  } else if (target.id === 'register') {
    addClass('slide-left', refs.resetPswWrap, refs.regForm, refs.logInForm);
    addClass('login-visible', refs.heroBtnList);
  } else if (target.id === 'login') {
    removeClass('slide-left', refs.resetPswWrap, refs.regForm, refs.logInForm);
    addClass('reg-visible', refs.heroBtnList);
    removeClass('login-visible', refs.heroBtnList);
  }
}

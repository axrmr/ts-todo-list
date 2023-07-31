import AuthAPI from '../../../API/AuthAPI';
import getRefs from '../../getRefs';
import showRegisterError from './showRegisterError';
import validatePassword from './validatePassword';

const refs = getRefs();

const toggleFormVisibility = () => {
  refs.regForm.classList.toggle('translate-left');
  refs.logInForm.classList.toggle('translate-left');
  const introAuthBtnsDivs = document.querySelectorAll('.intro-btns-wrap > div');
  introAuthBtnsDivs.forEach(div => {
    div.classList.toggle('translate-top');
  });
};

const onSubmitRegister = (e: SubmitEvent) => {
  e.preventDefault();

  const email = refs.regFormEmail.value.trim();
  const password = refs.regFormPsw.value.trim();
  const confirmPsw = refs.regFormConfirmPsw.value.trim();

  if (!email || !validatePassword(password, confirmPsw)) return;

  AuthAPI.registerEmailPassword(email, password)
    .then(() => {
      toggleFormVisibility();
      refs.regForm.reset();
    })
    .catch(err => {
      showRegisterError(err);
    });
};

refs.regForm.addEventListener('submit', onSubmitRegister);
refs.forgotPswBtn.addEventListener('click', () => {
  refs.resetPswForm.classList.add('translate-left');
  toggleFormVisibility();
});

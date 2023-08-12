import { AuthErrorCodes } from 'firebase/auth';

import AuthAPI from 'src/API/AuthAPI';
import getRefs from 'src/scripts/getRefs';
import showErrorMessage from '../showErrorMessage';
import toggleClass from '../toggleClass';

const refs = getRefs();

refs.resetPswForm.addEventListener('submit', onSubmitResetPsw);
refs.forgotPswBtn.addEventListener('click', onClickForgotPsw);

function onSubmitResetPsw(e: any) {
  e.preventDefault();
  const form = e.currentTarget;
  const email = form.email.value.trim();

  AuthAPI.sendResetPswEmail(email)
    .then(() => {
      toggleClass(
        'slide-right',
        refs.resetPswWrap,
        refs.regForm,
        refs.logInForm
      );
      refs.heroBtnsList.classList.remove('back-to-login-visible');
      refs.heroBtnsList.classList.add('reg-visible');
      form.reset();
    })
    .catch(showResetPswErr);
}

function onClickForgotPsw() {
  toggleClass('slide-right', refs.resetPswWrap, refs.regForm, refs.logInForm);
  refs.heroBtnsList.classList.add('back-to-login-visible');
}

function showResetPswErr(err: any) {
  alert(err.code);
  if (err.code === AuthErrorCodes.INVALID_EMAIL) {
    showErrorMessage({
      elems: [refs.resetPswErr],
      message: 'Incorrect email address.',
    });
  } else {
    alert(err.message);
  }
}

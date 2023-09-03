import { AuthErrorCodes } from 'firebase/auth';

import AuthAPI from 'src/API/AuthAPI';
import getRefs from 'src/scripts/getRefs';
import addClass from '../addClass';
import loader from '../loader';
import removeClass from '../removeClass';
import showErrorMessage from '../showErrorMessage';

const refs = getRefs();

refs.forgotPswBtn.addEventListener('click', onClickForgotPsw);
refs.resetPswForm.addEventListener('submit', onSubmitResetPsw);

function onClickForgotPsw() {
  addClass('slide-right', refs.resetPswWrap, refs.regForm, refs.logInForm);
  addClass('back-to-login-visible', refs.heroBtnList);
}

function onSubmitResetPsw(e: any) {
  e.preventDefault();
  const form = e.currentTarget;
  const email = form.email.value.trim();

  loader.show();
  AuthAPI.sendResetPswEmail(email)
    .then(res => {
      addClass('reg-visible', refs.heroBtnList);
      removeClass('back-to-login-visible', refs.heroBtnList);
      removeClass(
        'slide-right',
        refs.resetPswWrap,
        refs.regForm,
        refs.logInForm
      );

      form.reset();
      loader.hide();

      return res;
    })
    .catch(showResetPswErr);
}

function showResetPswErr(err: any) {
  alert(err.code);
  if (err.code === AuthErrorCodes.INVALID_EMAIL) {
    showErrorMessage({
      refs: [refs.resetPswErr],
      message: 'Incorrect email address.',
    });
  } else {
    alert(err.message);
  }
}

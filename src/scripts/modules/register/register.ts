import { AuthErrorCodes } from 'firebase/auth';

import { PromiseError } from 'src/types/types';

import addClass from 'src/scripts/addClass';
import loader from 'src/scripts/loader';
import removeClass from 'src/scripts/removeClass';
import AuthAPI from '../../../API/AuthAPI';
import getRefs from '../../getRefs';
import showErrorMessage from '../../showErrorMessage';
import validatePassword from './validatePassword';

const refs = getRefs();

refs.regForm.addEventListener('submit', onSubmitRegister);

function onSubmitRegister(e: any) {
  e.preventDefault();
  const form = e.currentTarget;
  const email = form.email.value.trim();
  const password = form.password.value.trim();
  const confirmPsw = form.confirmPsw.value.trim();

  if (!email || !validatePassword(password, confirmPsw)) return;

  loader.show();
  AuthAPI.registerEmailPassword(email, password)
    .then(res => {
      removeClass(
        'slide-left',
        refs.resetPswWrap,
        refs.regForm,
        refs.logInForm
      );
      removeClass('login-visible', refs.heroBtnList);
      addClass('reg-visible', refs.heroBtnList);

      form.reset();

      return res;
    })
    .catch(showRegisterError)
    .finally(loader.hide);
}

function showRegisterError(err: PromiseError) {
  if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
    showErrorMessage({
      refs: [refs.regEmailError],
      message: 'Email already in use.',
    });
  } else if (err.code === AuthErrorCodes.INVALID_EMAIL) {
    showErrorMessage({
      refs: [refs.regEmailError],
      message: 'Invalid email.',
    });
  }
}

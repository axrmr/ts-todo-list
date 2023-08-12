import { AuthErrorCodes } from 'firebase/auth';

import { PromiseError } from 'src/types/types';

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

  AuthAPI.registerEmailPassword(email, password)
    .then(() => {
      form.reset();
    })
    .catch(showRegisterError);
}

function showRegisterError(err: PromiseError) {
  if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
    showErrorMessage({
      elems: [refs.regEmailError],
      message: 'Email already in use.',
    });
  } else {
    alert(err.message);
  }
}

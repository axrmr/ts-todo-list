import { AuthErrorCodes } from 'firebase/auth';

import { PromiseError } from 'src/types/types';

import AuthAPI from 'src/API/AuthAPI';
import showErrorMessage from 'src/scripts/showErrorMessage';
import getRefs from '../getRefs';

const refs = getRefs();

refs.logInForm.addEventListener('submit', onSubmitLogIn);

function onSubmitLogIn(e: any) {
  e.preventDefault();
  const form = e.currentTarget;
  const email = form.email.value;
  const password = form.password.value;

  if (!email || !password) return;

  AuthAPI.logInEmailPassword(email, password)
    .then(() => {
      window.location.replace('../profile.html');
      form.reset();
    })
    .catch(showLogInError);
}

function showLogInError(err: PromiseError) {
  if (err.code === AuthErrorCodes.USER_DELETED) {
    showErrorMessage({
      elems: [refs.logInEmailError],
      message: 'Email not found.',
    });
  } else if (err.code === AuthErrorCodes.INVALID_PASSWORD) {
    showErrorMessage({
      elems: [refs.logInPswError],
      message: 'Wrong password. Please, try again.',
    });
  } else {
    alert(err.message);
  }
}

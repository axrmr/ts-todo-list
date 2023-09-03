import { AuthErrorCodes } from 'firebase/auth';

import { PromiseError } from 'src/types/types';

import AuthAPI from 'src/API/AuthAPI';
import showErrorMessage from 'src/scripts/showErrorMessage';
import getRefs from '../getRefs';
import loader from '../loader';

const refs = getRefs();

refs.logInForm.addEventListener('submit', onSubmitLogIn);
refs.googleIcon.addEventListener('click', onClickGoogleIcon);

function onSubmitLogIn(e: any) {
  e.preventDefault();
  const form = e.currentTarget;
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  if (!email || !password) return;

  loader.show();
  AuthAPI.logInEmailPassword(email, password)
    .then(res => {
      window.location.replace('../profile.html');
      form.reset();

      return res;
    })
    .catch(showLogInError)
    .finally(loader.hide);
}

function onClickGoogleIcon() {
  AuthAPI.signInWithGooglePopup().then(res => {
    window.location.href = '../../profile.html';

    return res;
  });
}

function showLogInError(err: PromiseError) {
  if (err.code === AuthErrorCodes.USER_DELETED) {
    showErrorMessage({
      refs: [refs.logInEmailError],
      message: 'Email not found.',
    });
  } else if (err.code === AuthErrorCodes.INVALID_PASSWORD) {
    showErrorMessage({
      refs: [refs.logInPswError],
      message: 'Wrong password.',
    });
  } else {
    alert(err.message);
  }
}

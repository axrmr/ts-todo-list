import AuthAPI from 'src/API/AuthAPI';
import getRefs from '../../getRefs';
import showLogInError from './showLogInError';

const refs = getRefs();

const onSubmitLogIn = (e: SubmitEvent) => {
  e.preventDefault();

  const email = refs.logInEmail.value;
  const password = refs.logInPsw.value;

  if (!email || !password) return;

  AuthAPI.logInEmailPassword(email, password)
    .then(() => {
      window.location.replace('../profile.html');
      refs.logInForm.reset();
    })
    .catch(showLogInError);
};

refs.logInForm.addEventListener('submit', onSubmitLogIn);

import { auth, logInEmailPassword } from '../API/firebase';
import getRefs from './getRefs';
import monitorAuthState from './monitorAuthState';

const refs = getRefs();

const onSubmitLogIn = (e: SubmitEvent) => {
  e.preventDefault();

  const email = refs.logInEmail.value;
  const password = refs.logInPassword.value;

  if (!email || !password) return;

  logInEmailPassword(auth, email, password).then(() => {
    window.location.replace('../profile.html');
    refs.logInForm.reset();
  });
};

refs.logInForm.addEventListener('submit', onSubmitLogIn);

monitorAuthState(auth);

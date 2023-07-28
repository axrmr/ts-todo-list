import { Auth, onAuthStateChanged } from 'firebase/auth';

import { auth, signInEmailPassword, signUpEmailPassword } from './API/firebase';

import getRefs from './scripts/getRefs';

const refs = getRefs();

const toggleFormVisibility = () => {
  refs.signUpForm.classList.toggle('is-visible');
  refs.signInForm.classList.toggle('is-visible');
};

const onSubmitSignUp = (e: SubmitEvent) => {
  e.preventDefault();

  const name = refs.signUpUserName.value.trim();
  const email = refs.signUpEmail.value.trim();
  const password = refs.signUpPassword.value.trim();
  const confirmPassword = refs.signUpConfirmPassword.value.trim();

  if (!email || !password || password !== confirmPassword) return;

  signUpEmailPassword(auth, email, password).then(() => {
    toggleFormVisibility();
  });

  refs.signUpForm.reset();
};

refs.signUpForm.addEventListener('submit', onSubmitSignUp);
refs.logInBtn.addEventListener('click', toggleFormVisibility);

const onSubmitSignIn = (e: SubmitEvent) => {
  e.preventDefault();

  const email = refs.signInEmail.value;
  const password = refs.signInPassword.value;

  if (!email || !password) return;

  signInEmailPassword(auth, email, password).then(() => {
    refs.signInForm.reset();
  });
};

refs.signInForm.addEventListener('submit', onSubmitSignIn);
refs.signUpBtn.addEventListener('click', toggleFormVisibility);

const monitorAuthState = async (auth: Auth) => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      location.pathname = './profile.html';
    } else {
      console.warn('You are not logged in.');
    }
  });
};

monitorAuthState(auth);

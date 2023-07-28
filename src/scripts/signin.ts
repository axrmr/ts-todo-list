import { auth, signInEmailPassword } from '../API/firebase';
import getRefs from './getRefs';

const refs = getRefs();

const toggleFormVisibility = () => {
  refs.signInForm.classList.add('is-visible');
  refs.signUpForm.classList.remove('is-visible');
};

const onSubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const email = refs.signInEmail.value;
  const password = refs.signInPassword.value;

  if (!email || !password) return;

  signInEmailPassword(auth, email, password).then(() => {
    refs.signInForm.reset();
  });
};

refs.signInForm.addEventListener('submit', onSubmit);
refs.signUpBtn.addEventListener('click', toggleFormVisibility);

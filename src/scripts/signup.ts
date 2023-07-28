import { auth, signUpEmailPassword } from '../API/firebase';
import getRefs from './getRefs';

const refs = getRefs();

const toggleFormVisibility = () => {
  refs.signUpForm.classList.add('is-visible');
  refs.signInForm.classList.remove('is-visible');
};

const onSubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const name = refs.signUpUserName.value.trim();
  const email = refs.signUpEmail.value.trim();
  const password = refs.signUpPassword.value.trim();
  const confirmPassword = refs.signUpConfirmPassword.value.trim();

  if (!email || !password || password !== confirmPassword) return;

  signUpEmailPassword(auth, email, password).then(res => {
    console.log('logof email, password -> ', email, password);
    console.log('logof res -> ', res);
    toggleFormVisibility();
  });

  refs.signUpForm.reset();
};

refs.signUpForm.addEventListener('submit', onSubmit);
refs.logInBtn.addEventListener('click', toggleFormVisibility);

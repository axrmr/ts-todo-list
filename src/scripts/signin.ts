import { signInEmailPassword } from './firebase';
import { getRefs } from './getRefs';

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

  signInEmailPassword(email, password).then(res => {
    console.log('logof res -> ', res);
    refs.signInForm.addEventListener('transitionend', () => {
      document.getElementById('form-wrapper')?.classList.add('is-visible');
    });
  });

  refs.signInForm.reset();
};

refs.signInForm.addEventListener('submit', onSubmit);
refs.signUpButton.addEventListener('click', toggleFormVisibility);

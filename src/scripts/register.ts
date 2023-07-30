import { auth, registerEmailPassword } from '../API/firebase';
import getRefs from './getRefs';

const refs = getRefs();

const toggleFormVisibility = () => {
  refs.registerForm.classList.toggle('translate-left');
  refs.logInForm.classList.toggle('translate-left');
  const divs = document.querySelectorAll('.intro-btns-wrap > div');
  divs.forEach(item => {
    item.classList.toggle('translate-top');
  });
};

const onSubmitRegister = (e: SubmitEvent) => {
  e.preventDefault();

  const name = refs.registerFormUserName.value.trim();
  const email = refs.registerFormEmail.value.trim();
  const password = refs.registerFormPassword.value.trim();
  const confirmPassword = refs.registerFormConfirmPassword.value.trim();

  if (!email || !password || password !== confirmPassword) return;

  registerEmailPassword(auth, email, password).then(() => {
    toggleFormVisibility();
    refs.registerForm.reset();
  });
};

refs.registerForm.addEventListener('submit', onSubmitRegister);

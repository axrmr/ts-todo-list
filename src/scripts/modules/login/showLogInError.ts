import authErrorCodes from 'src/constants/authErrorCodes';
import getRefs from '../../getRefs';

const refs = getRefs();

export default function showLogInError(err: any) {
  if (err.code === authErrorCodes.EMAIL_NOT_FOUND) {
    refs.logInEmailError.textContent = 'Email not found. Please, try again.';
    refs.logInEmailError.classList.remove('is-visible');

    const id = setTimeout(() => {
      refs.logInEmailError.classList.add('is-visible');
      clearTimeout(id);
    }, 2000);
  } else if (err.code === authErrorCodes.WRONG_PASSWORD) {
    refs.logInPswError.textContent = 'Wrong password. Please, try again.';
    refs.logInPswError.classList.remove('is-visible');

    const id = setTimeout(() => {
      refs.logInPswError.classList.add('is-visible');
      clearTimeout(id);
    }, 2000);
  }
}

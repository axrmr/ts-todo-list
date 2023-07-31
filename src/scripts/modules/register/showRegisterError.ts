import authErrorCodes from 'src/constants/authErrorCodes';
import getRefs from '../../getRefs';

const refs = getRefs();

export default function showRegisterError(err: any) {
  if (err.code === authErrorCodes.EMAIL_ALREADY_IN_USE) {
    refs.regEmailError.textContent = 'Email already in use.';
    refs.regEmailError.classList.remove('is-visible');

    const id = setTimeout(() => {
      refs.regEmailError.classList.add('is-visible');
      clearTimeout(id);
    }, 2000);
  }
}

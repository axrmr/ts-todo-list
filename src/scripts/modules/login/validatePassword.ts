import getRefs from 'src/scripts/getRefs';

const refs = getRefs();

export default function validatePassword(password: string) {
  if (password.length < 6) {
    refs.logInPswError.innerText = 'Password must be at least 6 characters.';
    refs.logInPswError.classList.remove('is-visible');
    refs.logInPswError.classList.add('highlight-font');

    const id = setTimeout(() => {
      refs.logInPswError.classList.add('is-visible');
      refs.logInPsw.classList.remove('highlight-font');

      clearTimeout(id);
    }, 3000);
  }
}

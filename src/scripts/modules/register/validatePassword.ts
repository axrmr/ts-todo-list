import getRefs from '../../getRefs';

const refs = getRefs();

export default function validatePassword(
  password: string,
  confirmPsw: string
): boolean {
  if (password.length < 6) {
    refs.regPswError.innerText = 'Password must be at least 6 characters.';
    refs.regPswError.classList.remove('is-visible');

    refs.regFormPsw.classList.add('highlight-font');
    refs.regFormConfirmPsw.classList.add('highlight-font');

    const id = setTimeout(() => {
      refs.regPswError.classList.add('is-visible');
      refs.regFormPsw.classList.remove('highlight-font');
      refs.regFormConfirmPsw.classList.remove('highlight-font');

      clearTimeout(id);
    }, 3000);

    return false;
  } else if (password !== confirmPsw) {
    refs.regPswError.innerText = 'Password do not match.';
    refs.regConfirmPswError.innerText = 'Password do not match.';

    refs.regPswError.classList.remove('is-visible');
    refs.regConfirmPswError.classList.remove('is-visible');

    const id = setTimeout(() => {
      refs.regPswError.classList.add('is-visible');
      refs.regConfirmPswError.classList.add('is-visible');

      clearTimeout(id);
    }, 3000);

    return false;
  }

  return true;
}

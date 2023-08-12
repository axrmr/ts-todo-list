import showErrorMessage from 'src/scripts/showErrorMessage';
import getRefs from '../../getRefs';

const refs = getRefs();

export default function validatePassword(
  password: string,
  confirmPsw: string
): boolean {
  if (password.length < 6) {
    showErrorMessage({
      elems: [refs.regPswError],
      message: 'Password must be at least 6 characters.',
    });

    return false;
  } else if (password !== confirmPsw) {
    showErrorMessage({
      elems: [refs.regPswError, refs.regConfirmPswError],
      message: 'Password do not match.',
    });

    return false;
  }

  return true;
}

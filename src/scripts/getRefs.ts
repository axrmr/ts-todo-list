export function getRefs() {
  return {
    signUpForm: document.getElementById('signUpForm') as HTMLFormElement,
    signUpUserName: document.getElementById(
      'signUpUserName'
    ) as HTMLInputElement,
    signUpEmail: document.getElementById('signUpEmail') as HTMLInputElement,
    signUpPassword: document.getElementById(
      'signUpPassword'
    ) as HTMLInputElement,
    signUpConfirmPassword: document.getElementById(
      'signUpConfirmPassword'
    ) as HTMLInputElement,
    registerButton: document.getElementById(
      'registerButton'
    ) as HTMLButtonElement,
    signUpButton: document.getElementById(
      'signUpButton'
    ) as HTMLButtonElement,
    signInForm: document.getElementById('signInForm') as HTMLFormElement,
    signInEmail: document.getElementById('signInEmail') as HTMLInputElement,
    signInPassword: document.getElementById(
      'signInPassword'
    ) as HTMLInputElement,
    signInButton: document.getElementById('signInButton') as HTMLButtonElement,
    logInButton: document.getElementById('logInButton') as HTMLButtonElement,
  };
}

export default function getRefs() {
  return {
    addTaskForm: document.getElementById('addTaskForm') as HTMLFormElement,
    backToLogInBtn: document.getElementById(
      'backToLogInBtn'
    ) as HTMLButtonElement,
    deleteTaskBtn: document.getElementById(
      'deleteTaskBtn'
    ) as HTMLButtonElement,
    logInForm: document.getElementById('logInForm') as HTMLFormElement,
    logInEmail: document.getElementById('logInFormEmail') as HTMLInputElement,
    logInPsw: document.getElementById('logInFormPsw') as HTMLInputElement,
    logInBtn: document.getElementById('logInFormBtn') as HTMLButtonElement,
    logOutBtn: document.getElementById('logOutBtn') as HTMLInputElement,
    logInEmailError: document.getElementById(
      'logInEmailError'
    ) as HTMLSpanElement,
    logInPswError: document.getElementById('logInPswError') as HTMLSpanElement,
    profileImg: document.getElementById('profileImg') as HTMLSpanElement,
    regForm: document.getElementById('regForm') as HTMLFormElement,
    regFormUserName: document.getElementById(
      'regFormUserName'
    ) as HTMLInputElement,
    regFormEmail: document.getElementById('regFormEmail') as HTMLInputElement,
    regFormPsw: document.getElementById('regFormPsw') as HTMLInputElement,
    regFormConfirmPsw: document.getElementById(
      'regFormConfirmPsw'
    ) as HTMLInputElement,
    regFormBtn: document.getElementById('regFormBtn') as HTMLButtonElement,
    regConfirmPswError: document.getElementById(
      'regConfirmPswErr'
    ) as HTMLSpanElement,
    regEmailError: document.getElementById('regEmailErr') as HTMLSpanElement,
    regPswError: document.getElementById('regPswErr') as HTMLSpanElement,
    resetPswForm: document.getElementById('resetPswForm') as HTMLFormElement,
    resetPswWrap: document.getElementById('resetPswWrap') as HTMLDivElement,
    resetPswErr: document.getElementById('resetPswErr') as HTMLSpanElement,
    heroBtnsList: document.getElementById('heroBtnsList') as HTMLUListElement,
    taskInput: document.getElementById('taskInput') as HTMLInputElement,
    tasksList: document.getElementById('tasksList') as HTMLUListElement,

    forgotPswBtn: document.getElementById('forgotPswBtn') as HTMLButtonElement,
  };
}

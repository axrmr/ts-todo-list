export default function getRefs() {
  return {
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
    logInForm: document.getElementById('loginForm') as HTMLFormElement,
    logInEmail: document.getElementById('loginFormEmail') as HTMLInputElement,
    logInPsw: document.getElementById('loginFormPsw') as HTMLInputElement,
    logInBtn: document.getElementById('loginFormBtn') as HTMLButtonElement,
    resetPswForm: document.getElementById('resetPswForm') as HTMLFormElement,
    introLogInBtn: document.getElementById(
      'introLogInBtn'
    ) as HTMLButtonElement,
    introRegBtn: document.getElementById('introRegBtn') as HTMLButtonElement,
    taskInput: document.getElementById('taskInput') as HTMLInputElement,
    logOutBtn: document.getElementById('logOutBtn') as HTMLInputElement,
    addTaskForm: document.getElementById('addTaskForm') as HTMLFormElement,
    tasksList: document.getElementById('tasksList') as HTMLUListElement,
    deleteTaskBtn: document.getElementById(
      'deleteTaskBtn'
    ) as HTMLButtonElement,
    regEmailError: document.getElementById('regEmailErr') as HTMLSpanElement,
    regPswError: document.getElementById('regPswErr') as HTMLSpanElement,
    regConfirmPswError: document.getElementById(
      'regConfirmPswErr'
    ) as HTMLSpanElement,
    logInEmailError: document.getElementById(
      'logEmailError'
    ) as HTMLSpanElement,
    logInPswError: document.getElementById('logPswError') as HTMLSpanElement,
    forgotPswBtn: document.getElementById('forgotPswBtn') as HTMLButtonElement,
  };
}

export default function getRefs() {
  return {
    registerForm: document.getElementById('registerForm') as HTMLFormElement,
    registerFormUserName: document.getElementById(
      'registerFormUserName'
    ) as HTMLInputElement,
    registerFormEmail: document.getElementById(
      'registerFormEmail'
    ) as HTMLInputElement,
    registerFormPassword: document.getElementById(
      'registerFormPassword'
    ) as HTMLInputElement,
    registerFormConfirmPassword: document.getElementById(
      'registerFormConfirmPassword'
    ) as HTMLInputElement,
    registerFormBtn: document.getElementById(
      'registerFormBtn'
    ) as HTMLButtonElement,

    logInForm: document.getElementById('loginForm') as HTMLFormElement,
    logInEmail: document.getElementById('loginFormEmail') as HTMLInputElement,
    logInPassword: document.getElementById(
      'loginFormPassword'
    ) as HTMLInputElement,
    logInBtn: document.getElementById('loginFormBtn') as HTMLButtonElement,
    introLogInBtn: document.getElementById(
      'introLogInBtn'
    ) as HTMLButtonElement,
    introRegisterBtn: document.getElementById(
      'introRegisterBtn'
    ) as HTMLButtonElement,
    taskInput: document.getElementById('taskInput') as HTMLInputElement,
    logOutBtn: document.getElementById('logOutBtn') as HTMLInputElement,
    createTaskForm: document.getElementById(
      'createTaskForm'
    ) as HTMLFormElement,
    tasksList: document.getElementById('tasksList') as HTMLUListElement,
    deleteTaskBtn: document.getElementById(
      'deleteTaskBtn'
    ) as HTMLButtonElement,
  };
}

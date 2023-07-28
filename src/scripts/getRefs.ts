export default function getRefs() {
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
    registerBtn: document.getElementById('registerBtn') as HTMLButtonElement,
    signUpBtn: document.getElementById('signUpBtn') as HTMLButtonElement,
    signInForm: document.getElementById('signInForm') as HTMLFormElement,
    signInEmail: document.getElementById('signInEmail') as HTMLInputElement,
    signInPassword: document.getElementById(
      'signInPassword'
    ) as HTMLInputElement,
    signInBtn: document.getElementById('signInBtn') as HTMLButtonElement,
    logInBtn: document.getElementById('logInBtn') as HTMLButtonElement,
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

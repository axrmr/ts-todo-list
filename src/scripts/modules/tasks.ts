import { onAuthStateChanged } from 'firebase/auth';

import AuthAPI, { auth } from 'src/API/AuthAPI';
import { Task } from 'src/types/types';
import addTask from '../addTask';
import deleteTask from '../deleteTask';
import getRefs from '../getRefs';
import isHaveTask from '../isHaveTask';
import loadTasks from '../loadTasks';
import saveTasks from '../saveTasks';
import sortTodo from '../sortTodo';
import toggleComplete from '../toggleComplete';

const refs = getRefs();
let USER_STORAGE_KEY = '';
let allTasks: any = [];

onAuthStateChanged(auth, user => {
  USER_STORAGE_KEY = user?.uid ?? '';
  allTasks = loadTasks(USER_STORAGE_KEY);

  addTask(allTasks, refs.tasksList);
});

refs.addTaskForm.addEventListener('submit', onSubmitCreateTask);
refs.tasksList.addEventListener('click', onClickTasksList);

function onSubmitCreateTask(e: SubmitEvent) {
  e.preventDefault();
  const taskVal = refs.taskInput.value.trim();

  if (!taskVal || isHaveTask(allTasks?.allTasks, taskVal)) return;

  const newTask: Task = {
    id: Date.now(),
    value: taskVal,
    isCompleted: false,
  };
  allTasks.unshift(newTask);

  addTask(allTasks, refs.tasksList);
  saveTasks(allTasks, USER_STORAGE_KEY);

  refs.taskInput.value = '';
}

function onClickTasksList(e: any) {
  const target = e.target;
  const customCheck = target.classList.contains('task__custom-check');
  const taskName = target.classList.contains('task__name');

  if (customCheck || taskName) {
    const id = +target.closest('li').id;

    toggleComplete(allTasks, id);
    sortCompleted();
    saveTasks(allTasks, USER_STORAGE_KEY);
  } else if (target.classList.contains('delete-task-btn')) {
    const task = target.closest('li');

    deleteTask(task, allTasks, +task.id);
    saveTasks(allTasks, USER_STORAGE_KEY);
  }
}

function sortCompleted() {
  sortTodo(allTasks, -1);

  document.querySelectorAll('.task').forEach(task => {
    task.addEventListener('transitionend', () => {
      const id = setTimeout(() => {
        addTask(allTasks, refs.tasksList);
        saveTasks(allTasks, USER_STORAGE_KEY);
        clearTimeout(id);
      }, 100);
    });
  });
}

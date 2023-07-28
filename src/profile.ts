import { auth, logOut } from './API/firebase';
import addTask from './scripts/addTask';
import deleteTask from './scripts/deleteTask';
import getRefs from './scripts/getRefs';
import isHaveTask from './scripts/isHaveTask';
import loadTasks from './scripts/loadTasks';
import saveTasks from './scripts/saveTasks';
import toggleCompleted from './scripts/toggleCompleted';
import Task from './types/types';

const TASKS_STORAGE_KEY = 'todo-tasks';
const refs = getRefs();

const allTasks: Task[] = loadTasks(TASKS_STORAGE_KEY);
addTask(allTasks, refs.tasksList);

const onSubmitCreateTask = (e: Event) => {
  e.preventDefault();
  const taskVal = refs.taskInput.value.trim();

  if (!taskVal || isHaveTask(allTasks, taskVal)) return;

  const id = Date.now();
  const newTask: Task = {
    id,
    value: taskVal,
    isCompleted: false,
  };

  allTasks.push(newTask);

  addTask(allTasks, refs.tasksList);
  saveTasks(allTasks, TASKS_STORAGE_KEY);

  refs.taskInput.value = '';
};

refs.createTaskForm.addEventListener('click', onSubmitCreateTask);

const onClickTasksList = (e: any) => {
  if (
    e.target.classList.contains('task__custom-check') ||
    e.target.classList.contains('task__name')
  ) {
    const id = +e.target.closest('li').id;

    toggleCompleted(allTasks, id);
    saveTasks(allTasks, TASKS_STORAGE_KEY);
  } else if (e.target.classList.contains('delete-task-btn')) {
    const id = +e.target.closest('li').id;

    e.target.closest('li').remove();
    deleteTask(allTasks, id);
    saveTasks(allTasks, TASKS_STORAGE_KEY);
  }
};

refs.tasksList.addEventListener('click', onClickTasksList);

const onClickLogOut = async () => {
  await logOut(auth);
  location.href = 'http://localhost:4000';
};

refs.logOutBtn.addEventListener('click', onClickLogOut);

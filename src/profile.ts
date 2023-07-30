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

const onSubmitCreateTask = (e: SubmitEvent) => {
  e.preventDefault();
  const taskVal = refs.taskInput.value.trim();

  if (!taskVal || isHaveTask(allTasks, taskVal)) return;

  const newTask: Task = {
    id: Date.now(),
    value: taskVal,
    isCompleted: false,
  };

  allTasks.unshift(newTask);

  addTask(allTasks, refs.tasksList);
  saveTasks(allTasks, TASKS_STORAGE_KEY);

  refs.taskInput.value = '';
};

refs.createTaskForm.addEventListener('submit', onSubmitCreateTask);

const sortIsCompleted = () => {
  allTasks.sort((a, b) => {
    const first = a.isCompleted ? 1 : -1;
    const sec = b.isCompleted ? 1 : -1;

    return first - sec;
  });

  document.querySelectorAll('.task').forEach(task => {
    task.addEventListener('transitionend', () => {
      const id = setTimeout(() => {
        addTask(allTasks, refs.tasksList);
        saveTasks(allTasks, TASKS_STORAGE_KEY);
        clearTimeout(id);
      }, 100);
    });
  });
};

const onClickTasksList = (e: any) => {
  const customCheck = e.target.classList.contains('task__custom-check');
  const taskName = e.target.classList.contains('task__name');

  if (customCheck || taskName) {
    const id = +e.target.closest('li').id;

    toggleCompleted(allTasks, id);
    sortIsCompleted();
    saveTasks(allTasks, TASKS_STORAGE_KEY);
  } else if (e.target.classList.contains('delete-task-btn')) {
    const task = e.target.closest('li');

    deleteTask(task, allTasks, +task.id);
    saveTasks(allTasks, TASKS_STORAGE_KEY);
  }
};

refs.tasksList.addEventListener('click', onClickTasksList);

const onClickLogOut = async () => {
  await logOut(auth);
  location.replace('/');
};

refs.logOutBtn.addEventListener('click', onClickLogOut);

import AuthAPI from 'src/API/AuthAPI';
import { Task } from 'src/types/types';
import addTask from '../addTask';
import deleteTask from '../deleteTask';
import getRefs from '../getRefs';
import isHaveTask from '../isHaveTask';
import loadTasks from '../loadTasks';
import saveTasks from '../saveTasks';
import sortTodo from '../sortTodo';
import toggleComplete from '../toggleComplete';

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

refs.addTaskForm.addEventListener('submit', onSubmitCreateTask);

const sortCompletedTodo = () => {
  sortTodo(allTasks, -1);

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

    toggleComplete(allTasks, id);
    sortCompletedTodo();
    saveTasks(allTasks, TASKS_STORAGE_KEY);
  } else if (e.target.classList.contains('delete-task-btn')) {
    const task = e.target.closest('li');

    deleteTask(task, allTasks, +task.id);
    saveTasks(allTasks, TASKS_STORAGE_KEY);
  }
};

refs.tasksList.addEventListener('click', onClickTasksList);

const onClickLogOut = async () => {
  await AuthAPI.logOut();
  location.replace('/');
};

refs.logOutBtn.addEventListener('click', onClickLogOut);

import { Task } from '../types/types';

export default function saveTasks(tasks: Task[], key: string) {
  try {
    const userJSON = localStorage.getItem(key);
    const user = userJSON !== null ? JSON.parse(userJSON) : {};
    const userData = {
      ...user,
      tasks: [...tasks],
    };
    const serializedState = JSON.stringify(userData);

    if (serializedState == 'null' || serializedState === undefined)
      throw new Error();

    localStorage.setItem(key, serializedState);
  } catch (err) {
    alert(`LocalStorage set error! Value cannot be null | undefined`);
  }
}

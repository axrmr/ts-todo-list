import {Task} from '../types/types';

export default function saveTasks(tasks: Task[], key: string) {
  try {
    const serializedState = JSON.stringify(tasks);

    if (serializedState == 'null' || serializedState === undefined)
      throw new Error();

    localStorage.setItem(key, serializedState);
  } catch (err) {
    alert(`LocalStorage set error! Value cannot be null | undefined`);
  }
}

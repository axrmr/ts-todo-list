import { User } from 'src/types/types';

export default function loadTasks(key: string) {
  const userJSON = localStorage.getItem(key);
  const user: User = userJSON !== null ? JSON.parse(userJSON) : undefined;

  return !user.tasks ? [] : user.tasks;
}

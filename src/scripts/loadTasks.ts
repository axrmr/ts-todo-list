import { Task } from '../types/types';

export default function loadTasks(key: string): Task[] {
  const jsonTasks = localStorage.getItem(key);
  return jsonTasks ? JSON.parse(jsonTasks) : [];
}

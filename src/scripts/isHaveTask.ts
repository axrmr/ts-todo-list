import { Task } from '../types/types';

export default function isHaveTask(tasks: Task[], value: string) {
  if (!tasks) return;

  const task = tasks.find(task => task.value === value);
  return !!task;
}

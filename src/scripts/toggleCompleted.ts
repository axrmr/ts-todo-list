import Task from '../types/types';

export default function toggleCompleted(tasks: Task[], id: number) {
  tasks.forEach(task => {
    if (task.id === id) {
      task.isCompleted = !task.isCompleted;
    }
  });
}

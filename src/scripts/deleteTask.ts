import Task from '../types/types';

export default function deleteTask(tasks: Task[], id: number) {
  tasks.forEach((task, idx) => {
    if (task.id === id) {
      tasks.splice(idx, 1);
    }
  });
}

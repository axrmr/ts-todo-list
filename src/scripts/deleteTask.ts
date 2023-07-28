import Task from '../types/types';

export default function deleteTask(
  el: HTMLLIElement,
  tasks: Task[],
  id: number
) {
  el.remove();
  tasks.forEach((task, idx) => {
    if (task.id === id) {
      tasks.splice(idx, 1);
    }
  });
}

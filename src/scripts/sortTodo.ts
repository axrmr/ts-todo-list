import { Task } from 'src/types/types';

export default function sortTodo(tasks: Task[], order: number) {
  if (order === 1) {
    tasks.sort((a, b) => {
      const first = a.isCompleted ? 1 : -1;
      const sec = b.isCompleted ? 1 : -1;

      return sec - first;
    });
  } else if (order === -1) {
    tasks.sort((a, b) => {
      const first = a.isCompleted ? 1 : -1;
      const sec = b.isCompleted ? 1 : -1;

      return first - sec;
    });
  }
}

import { Task } from '../types/types';

export default function addTask(tasks: Task[], rootEl: HTMLElement) {
  const markup = tasks.map(({ id, value, isCompleted }) => {
    return `
        <li id=${id} class="task" >
          <label class="task__label">
            <input type="checkbox" ${isCompleted && 'checked'} />
            <span class="task__custom-check"></span>
            <span class="task__name">${value}</span>
            </label>
            <button class="delete-task-btn">&#x2715;</button>
        </li>
    `;
  });

  rootEl.innerHTML = markup.join('');
}

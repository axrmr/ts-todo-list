interface ShowErrorMessageProps {
  message: string;
  refs: HTMLElement[];
  ms?: number;
}

export default function showErrorMessage({
  refs,
  message,
  ms = 3000,
}: ShowErrorMessageProps) {
  refs.forEach(el => {
    el.textContent = message;
    el.classList.add('visible');
  });

  const id = setTimeout(() => {
    refs.forEach(el => {
      el.classList.remove('visible');
    });
    clearTimeout(id);
  }, ms);
}

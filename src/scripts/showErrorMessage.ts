interface ShowErrorMessageProps {
  message: string;
  elems: HTMLElement[];
  ms?: number;
}

export default function showErrorMessage({
  elems,
  message,
  ms = 3000,
}: ShowErrorMessageProps) {
  elems.forEach(el => {
    el.textContent = message;
    el.classList.add('visible');
  });

  const id = setTimeout(() => {
    elems.forEach(el => {
      el.classList.remove('visible');
    });
    clearTimeout(id);
  }, ms);
}

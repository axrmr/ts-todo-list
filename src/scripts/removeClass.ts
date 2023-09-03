export default function removeClass(
  className: string,
  ...elements: HTMLElement[]
) {
  elements.forEach(el => el.classList.remove(className));
}

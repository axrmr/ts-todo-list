export default function toggleClass(
  className: string,
  ...elements: HTMLElement[]
) {
  elements.forEach(el => el.classList.toggle(className));
}

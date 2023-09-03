export default function addClass(
  className: string,
  ...elements: HTMLElement[]
) {
  elements.forEach(el => el.classList.add(className));
}

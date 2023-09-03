const show = () => {
  document.querySelector('.loader')?.classList.add('visible');
};

const hide = () => {
  document.querySelector('.loader')?.classList.remove('visible');
};

export default { hide, show };

import getRefs from '../getRefs';

const IMG_STORAGE_KEY = 'todo-profile-img';
const refs = getRefs();
const inputFile = document.getElementById('inputFile') as HTMLInputElement;
let uploadedImg = localStorage.getItem(IMG_STORAGE_KEY) ?? '';

inputFile.addEventListener('change', onChangeInputFile);
setBackgroundPic(refs.profileImg, uploadedImg);

function onChangeInputFile() {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    const readerRes = reader.result;
    if (typeof readerRes === 'string') {
      localStorage.setItem(IMG_STORAGE_KEY, readerRes);
      uploadedImg = readerRes;
      setBackgroundPic(refs.profileImg, uploadedImg);
    }
  });
  // @ts-ignore
  reader.readAsDataURL(this.files[0]);
}

export function setBackgroundPic(el: HTMLElement, pic: string) {
  el.style.backgroundImage = `url(${pic})`;
}

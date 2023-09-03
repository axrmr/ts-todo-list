import AuthAPI from 'src/API/AuthAPI';
import getRefs from '../getRefs';
import loader from '../loader';

const refs = getRefs();

refs.logOutBtn.addEventListener('click', onClickLogOut);

function onClickLogOut() {
  loader.show();
  AuthAPI.logOut().then(() => {
    setTimeout(() => {
      loader.hide();
      location.replace('/');
    }, 200);
  });
}

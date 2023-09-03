import { onAuthStateChanged } from 'firebase/auth';

import { auth } from 'src/API/AuthAPI';
import { User } from 'src/types/types';
import { UserAPI } from '../UserAPI';
import getRefs from '../getRefs';

let USER_STORAGE_KEY = '';
const refs = getRefs();

refs.inputFile.addEventListener('change', onChangeInputFile);

function onChangeInputFile() {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    const readerResult = reader.result;

    if (typeof readerResult === 'string') {
      UserAPI.saveUserAvatar(USER_STORAGE_KEY, readerResult);
      setProfilePic(refs.profileImg, readerResult);
    }
  });
  // @ts-ignore
  reader.readAsDataURL(this.files[0]);
}

onAuthStateChanged(auth, user => {
  if (user) {
    let { uid, displayName: name, email, photoURL: avatar } = user;
    const savedUser = UserAPI.getUser(uid);

    USER_STORAGE_KEY = uid;

    if (!savedUser || savedUser.uid !== uid) {
      UserAPI.createUser(user.uid, {
        uid,
        name,
        email,
        avatar,
      });

      const storedUser = UserAPI.getUser(uid);
      setUserProfileInfo(storedUser);
    } else {
      setUserProfileInfo(savedUser);
    }
  } else {
  }
});

function setUserProfileInfo(user: User) {
  refs.profileName.textContent = user.name;
  refs.profileNick.textContent = user.email;

  user.avatar && setProfilePic(refs.profileImg, user.avatar);
}

function setProfilePic(el: HTMLElement, link: string) {
  el.style.backgroundImage = `url(${link})`;
}

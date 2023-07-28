import './scripts/signin';
import './scripts/signup';

import { Auth, onAuthStateChanged } from 'firebase/auth';
import { auth } from './API/firebase';

const monitorAuthState = async (auth: Auth) => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      location.href = 'http://localhost:4000/profile.html';
    } else {
      console.warn('You are not logged in.');
    }
  });
};

monitorAuthState(auth);

import { Auth, onAuthStateChanged } from 'firebase/auth';

export default async function monitorAuthState(auth: Auth) {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('logof user -> ', user);
    } else {
      console.log('logof user -> ', user);
    }
  });
}

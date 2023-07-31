import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDE2eZOzVGpbT0s2LB6pZHlEBUSNwWOv-Q',
  authDomain: 'ts-todo-project.firebaseapp.com',
  projectId: 'ts-todo-project',
  storageBucket: 'ts-todo-project.appspot.com',
  messagingSenderId: '198650447364',
  appId: '1:198650447364:web:b98edd512f6348bbf65751',
  measurementId: 'G-5JDDM3CVY5',
});

export const auth = getAuth(firebaseApp);

const actionCodeSettings = {
  url: 'http://localhost:4000/profile.html',
  handleCodeInApp: true,
};

export default class AuthAPI {
  static async registerEmailPassword(email: string, password: string) {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredentials;
  }
  static async logInEmailPassword(email: string, password: string) {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredentials;
  }
  static async logOut() {
    await signOut(auth);
  }
  static async resetPasswordEmail(email: string) {
    const res = await sendPasswordResetEmail(auth, email);
    return res;
  }

  static async logInViaEmail(email: string) {
    try {
      sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;
    }
  }
}

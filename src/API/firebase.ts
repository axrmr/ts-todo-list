import { initializeApp } from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
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

export const registerEmailPassword = async (
  auth: Auth,
  email: string,
  password: string
) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log('signUp userCredentials -> ', userCredentials.user);
  } catch (err) {
    console.log('signUp err.message -> ', err.message);
  }
};

export const logInEmailPassword = async (
  auth: Auth,
  email: string,
  password: string
) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(
      'signIn id="signUpButton"id="signUpButton"id="signUpButton"userCredentials -> ',
      userCredentials
    );
  } catch (err) {
    console.log(err.message);
  }
};

export const logOut = async (auth: Auth) => {
  await signOut(auth);
};

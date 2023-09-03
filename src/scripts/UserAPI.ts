import { User } from 'src/types/types';

export class UserAPI {
  static createUser(key: string, userData: User) {
    const { uid, name, email, avatar } = userData;
    const userJSON = localStorage.getItem(key);
    const user = userJSON !== null ? JSON.parse(userJSON) : undefined;

    if (user && user.uid === uid) return;

    const newUser = {
      uid,
      email,
      name: name ?? 'User',
      avatar: avatar ?? 'https://picsum.photos/200',
    };

    localStorage.setItem(key, JSON.stringify(newUser));
  }

  static getUser(key: string) {
    const userJSON = localStorage.getItem(key);
    return userJSON !== null ? JSON.parse(userJSON) : undefined;
  }

  static saveUserAvatar(key: string, picURL: string) {
    const userJSON = localStorage.getItem(key);
    const user: User = userJSON !== null ? JSON.parse(userJSON) : undefined;

    user.avatar = picURL;
    localStorage.setItem(key, JSON.stringify(user));
  }
}

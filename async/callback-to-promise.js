// Callback Hell example
/*
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'euna' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'euna') {
          resolve({ name: 'euna', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
*/

const id = prompt('enter your id');
const password = prompt('enter your password');

const loginUser = (id, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        (id === 'euna' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        resolve(id);
      } else {
        reject(new Error('not found'));
      }
    }, 2000);
  });

const getRoles = (user) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === 'euna') {
        resolve({ name: 'euna', role: 'admin' });
      } else {
        reject(new Error('no access'));
      }
    }, 1000);
  });

loginUser(id, password) //
  .then(getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log)
  .finally(() => console.log('finally'));

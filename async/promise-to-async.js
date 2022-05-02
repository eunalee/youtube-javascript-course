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

// async function getUserInfo(id, password) {
//   const userId = await loginUser(id, password);
//   const user = await getRoles(userId);
//   return user;
// }
  
// getUserInfo(id, password)
//   .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
//   .catch(console.log);

async function getUserInfo() {
  try {
    const userId = await loginUser(id, password);
    const user = await getRoles(userId);
    alert(`Hello ${user.name}, you have a ${user.role} role`);
  } catch (error) {
    console.log(error);
  }
}

getUserInfo();
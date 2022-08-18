// let user = {
//   name: 'Sergey',
//   age: 34,
// };

// console.log();
// console.log('#####VAR1#####');

// let admin = user;

// admin.name = 'Andrey';

// console.log(admin == user);
// console.log(user);
// console.log(admin);

// console.log();
// console.log('#####VAR2#####');

// let clone = {};

// for (let key in user) {
//     clone[key] = user[key];
// }

// console.log(clone);
// console.log(clone == user);

// let clone2 = {};
// Object.assign(clone2, [user]);

// console.log(clone2);
// console.log(clone2 == user);

let user = {
  name: 'Pete',
  age: {
    old: 54,
    young: 25,
  },
};

let clone = {};

deepClone(user, clone);

clone.age.old = 26;
clone.age.young = 56;
clone.name = 'Alan';

console.log();
console.log('##### FIRST OBJECT #####');
console.log(user);

console.log();
console.log('##### SECOND OBJECT #####');
console.log(clone);

function deepClone(first_object, clone_object) {
  for (let key in first_object) {
    if (typeof first_object[key] == 'object') {
      clone_object[key] = {};
      deepClone(first_object[key], clone_object[key]);
    } else {
      clone_object[key] = first_object[key];
    }
  }
}

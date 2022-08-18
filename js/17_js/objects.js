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

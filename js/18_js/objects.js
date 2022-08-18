let user = {
    name: 'Igor',
    age: 34,
    sayHi: function() {
        console.log("hi");
    },
    sayName: function() {
        console.log(this.name);
    } 
}

// user.sayHi = function() {
//     console.log('Hi!');
// }

// user = {
//     sayHi() {
//         console.log("Hello");
//     }
// }

user.sayHi();
user.sayName();
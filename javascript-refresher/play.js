// const name = "Matt";
// let age = 23;
// const hasHobbies = true;

// age = 30;

// const summariseUser = (userName, userAge, userHasHobby) => {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the user has hobbies: " +
//     userHasHobby
//   );
// };

// const add = (a, b) => a + b;

// const person = {
//   name: "Matt",
//   age: 23,
//   greet() {
//     console.log("Hi, I am " + this.name);
//   },
// };

// const printName = ({ name }) => {
//     console.log(name);
// }

// printName(person);

// const { name, age } = person;
// console.log(name, age);

// person.greet();

// const hobbies = ["Sports", "Cooking"];

// console.log(hobbies.map((hobby) => "Hobby: " + hobby));

// hobbies.push('Programming')

// const copiedArray = [...hobbies];
// const copiedPerson = {...person};

// console.log(copiedPerson);
// console.log(copiedArray);

// console.log(hobbies);

// console.log(add(1, 2));

// console.log(summariseUser(name, age, hasHobbies));

// const toArray = (...args) => {
//     return args;
// };

// console.log(toArray(1, 2, 3, 4));

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

/*
 * Complete the TODO items below
 */

const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  },
  {
    name: 'nadia',
    email: 'notmyreal@email.com',
    languages: ['esperanto', 'pig latin', 'janky js']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array

console.log(users);


// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`

const name = 'your_name_here';
const email = '';
const languages = [];

// let name = 'something';
//
// console.log(name);


// TODO: rewrite the object literal using object property shorthand

// users.push({
//   name: name,
//   email: email,
//   languages: languages
// });

users.push({
  name,
  email,
  languages
});

// console.log(users.push);


// TODO: replace `var` with `let` in the following variable declarations

// var emails = [];
// var names = [];

let emails = [];
let names = [];



// TODO: rewrite the following using arrow functions

// users.forEach(function(user) {
//   return emails.push(user.email);
// });

// users.forEach(function(user) {
//   return names.push(user.name);
// });
//
users.forEach((user) => emails.push(user.email));

users.forEach((user) => names.push(user.name));



// TODO: replace `var` with `let` in the following declaration

let developers = [];

users.forEach((user) => {


  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition

const {name, email, languages} = user;

  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

  // TODO: rewrite the assignment below to use template strings

//   developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
// });

  developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`);

  console.log(developers.push);


// TODO: Use `let` for the following variable

let list = '<ul>';


  // TODO: rewrite the following loop to use a for..of loop

for (let developer of developers) {

// developers.forEach(function (developer) {


  // TODO: rewrite the assignment below to use template strings
//
//   list += '<li>${developer}</li>';
// };
//
//   list += '</ul>';



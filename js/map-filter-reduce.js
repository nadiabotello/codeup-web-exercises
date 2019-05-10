"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

console.log(users);


// 1. Create a file named map-filter-reduce.js in your js directory
// and copy the users data below into it.

//  2.   Use .filter to create an array of user objects where each user object
//     has at least 3 languages in the languages array.

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let langThreeArray = [];
let email = [];
//
// const langThree = users.filter(function(language) {
//
//     if (language.length >= 3) {
//         let language = "";
//         langThreeArray.push(language);
//     }
//
//     return language;
// });

//
//  3.   Use .map to create an array of strings where each element is a user's email address

// var incremented = numbers.map(function(n) {
//     return n + 1;
// });
// console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


const userEmails = users.map((email) => email.push(users.email));
console.log(userEmails);
//
// const userEmails = users.map(function(email) {
//     return email = users.email;
// });
//
// console.log(userEmails);



// 4. Use reduce to get the total years of experience from the list of users. Once you get the total of
// years you can use the result to calculate the average.

// const totalYears = users.reduce((total, users) => {
//     return total + users.yearsOfExperience;
// }, 0);

// console.log(totalYears);

// const getAverageYears = users => {
//     let totalYears = users.reduce((accumulator,user) => {
//         return user.yearsOfExperience + accumulator;
//     }, 0);
//     console.log(totalYears);
//     return totalYears/users.length;
// };
//
// console.log(getAverageYears(users));



//   5.  Use reduce to get the longest email from the list of users.

// const longestEmail = email => {
//     let splitEmail = users.email.split("");
//     let longestEmail = splitEmail.reduce((longestEmail, email) => {
//         if (email.length > longestEmail.length){
//             longestEmail = email;
//         }
//         return longestEmail;
//     }, "");
//     return email;
// };
// //
// console.log(longestEmail(users.email));


//   6.  Use reduce to get the list of user's names in a single string.
//   Example: Your instructors are: ryan, luis, zach, fernando, justin.
//


// const listofUsers = name => {
//     let joinNames = users.name.join(" ");
//     let joinedNames = joinNames.reduce((listofUsers, name) => {
//         if (word.length > biggestWord.length){
//
//         }
//         return biggestWord;
//     }, "");
// };


//
// console.log(longestWord(testSentence1));
// console.log(longestWord(testSentence2));




// const longestWord = sentence => {
//     // How do I do this?
//     let splitSentence = sentence.split(" ");
//     let longestWord = splitSentence.reduce((biggestWord, word) => {
//         if (word.length > biggestWord.length){
//             biggestWord = word;
//         }
//         return biggestWord;
//     }, "");
//     return longestWord;
// };
//
// console.log(longestWord(testSentence1));
// console.log(longestWord(testSentence2));









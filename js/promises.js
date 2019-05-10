"use strict";

// Write a function named wait that accepts a number as a parameter,
//     and returns a promise that resolves after the passed number of milliseconds.
//

function wait (n) {
    return new Promise((resolve, reject) => {
        if (n === 1000) {
            resolve('You\'ll see this after 1 second');
        } else if (n === 3000) {
            resolve('You\'ll see this after 3 seconds');
        } else {
            reject('This failed.');
        }
    });
}


console.log(wait(1000));

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// Create a function that accepts a github username, and returns a promise that resolves
// with the date of the last commit that user made. Reference the github api documentation
// to achieve this.

function getGithubUsername() {
    return fetch('https://api.github.com/users/nadiabotello/events', {headers: {'Authorization': 'githubKey'}})
        .then(response => response.json())
}

getGithubUsername().then((username) => {
        console.log('Users last commit was: ' + username[0].created_at);
    })
.catch(error => console.error(error));


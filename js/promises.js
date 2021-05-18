"use strict";

// function getGithubCommit() {
//     return fetch('https://api.github.com/users/valadezkaren04/repos')
//         .then(response => response.json()).then(data => {
//             console.log(data);
//         });
// }
// getGithubCommit();
const userLastCommit = username => {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${PROMISE_GITHUB_TOKEN}`}})
        .then(resp => resp.json())
        .then(data => {
            // console.log(data);
            let lastPush;
            for (let event of data) {
                if(event.type === "PushEvent") {
                    lastPush = new Date(event.created_at);
                    break;
                }
            }
            console.log(lastPush);
        });
}
userLastCommit("valadezkaren04");


const wait = num => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`You'll see this after ${num/1000} seconds`);
        }, num)
    });
}
wait(1000).then(message => console.log(message));
wait(3000).then(message => console.log(message));
wait(5000).then(message => console.log(message)); //takes the message from inside the resolve

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds')); //when resolve() is empty it console's the message

// function wait(num) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//
//         },num)
//     });
// }
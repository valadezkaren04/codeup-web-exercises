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

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const threeLanguages = users.filter(function(user) {
    return user.languages.length >= 3;
});

//Use .map to create an array of strings where each element is a user's email address
// let emails = users.map(function(userEmail) {
//     userEmail = userEmail.email;
//     return userEmail;
// })

// ES6
let emails = users.map((theUser => theUser.email));

//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalOfAllUsersYearsOfExp = users.reduce((accumulator, user) => {
    return accumulator + user.yearsOfExperience;
},0);

console.log(totalOfAllUsersYearsOfExp);
//Use .reduce to get the longest email from the list of users.
let usersLongestEmail = users.reduce((accu, user) => {
    return accu.length > user.email.length ? accu : user.email;
}, []);
console.log("The longest e-mail address is: " + usersLongestEmail);

//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let usersString = users.reduce((accu, user, index) => {
    return index === 0 ? user.name : accu + ", " + user.name;
}, "");
console.log("The instructors are: " + usersString);
//BONUS: Use .reduce to get the unique list of languages from the list of users.

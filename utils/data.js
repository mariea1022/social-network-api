const usernameArray = [
    'gwashington',
    'alincoln',
    'hpotter',
    'jdoe'
];

const emailArray = [
    'test1@imagination.com',
    'test2@imagination.com',
    'test3@imagination.com',
    'test4@imagination.com',
];

const thoughtArray = [
    'testing 1 2 3',
    'just thinking',
    'where to start?',
    'testing testing testing',
];

const reactionArray = [
    'very cool',
    'super random',
    'very relatable',
    'this is funny',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// get random username
const getRandomUsername = () => getRandomArrItem(usernameArray);

// get random email
const getRandomEmail = () => getRandomArrItem(emailArray);

// Function to generate random thoughts that we can add to user object.
const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtArray),
        reactions: getRandomArrItem(reactionArray),
      });
    }
    return results;
  };

// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomEmail, getRandomThought, };
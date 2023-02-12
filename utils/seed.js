const connection = require("../config/connection");
const { Thought, User, Reaction } = require("../models");
const {
  getRandomUsername,
  getRandomEmail,
  getRandomThought,
} = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Loop 4 times -- add users to the users array
  for (let i = 0; i < 4; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const thoughts = getRandomThought(4);

    const username = getRandomUsername();
    const email = getRandomEmail();

    users.push({
      username,
      email,
      thoughts,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertOne({
    thoughtText: "the best thought ever",
    reactions: [...reactions],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});

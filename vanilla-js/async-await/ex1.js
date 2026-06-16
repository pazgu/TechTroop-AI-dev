// Convert the function to use async/await syntax
// Use try/catch for error handling
// Maintain the same functionality (logging and return values)
// Test with both valid (1-10) and invalid (999) user IDs
// Given Promise-based code:
async function getUserById(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    if (!response.ok) {
      throw new Error("User not found");
    }
    const user = await response.json();
    console.log(`Found user: ${user.name} (${user.email})`);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
}

async function runTests() {
  console.log("--- Starting Tests ---\n");

  try {
    const validUser = await getUserById(1);
  } catch (err) {
    console.log("error with user 1");
  }

  console.log("\n-------------------------\n");

  try {
    const invalidUser = await getUserById(999);
  } catch (err) {
    console.log("Test Info: Caught the expected error from the invalid ID.");
  }

  console.log("\n--- Tests Finished ---");
}

runTests();

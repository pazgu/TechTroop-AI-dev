// Create a function that fetches a user and then fetches all posts by that user.
// Return an object containing both user info and their posts.
// Handle errors at each step with meaningful messages.
// If user doesn't exist, don't attempt to fetch posts.
// Starter code structure:
async function getUserWithPosts(userId) {
  // Your implementation here
  // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
  // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
  // 3. Return combined data
  try {
    const response = fetch(
      "https://jsonplaceholder.typicode.com/users/${userId}",
    );

    if (!response.ok) {
      throw new Error("User not found");
    }
    const user = await response.json();
    if (user && user.posts.length > 0) {
      const posts = fetch(
        "https://jsonplaceholder.typicode.com/posts?userId=${userId}",
      );
      if (!postsResponse.ok) {
        throw new Error(`Failed to fetch posts for user ID ${userId}.`);
      }

      const posts = await postsResponse.json();
      console.log(`Found ${posts.length} posts.`);

      return {
        userInfo: user,
        userPosts: posts,
      };
    }
  } catch (err) {
    console.error(`Checkout process failed:`, err.message);
    throw err;
  }
}

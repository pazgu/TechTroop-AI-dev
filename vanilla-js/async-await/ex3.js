// Create a dashboard function that fetches multiple types of data simultaneously and aggregates them.

// Fetch these data sources in parallel:

// All users: https://jsonplaceholder.typicode.com/users
// All posts: https://jsonplaceholder.typicode.com/posts
// All comments: https://jsonplaceholder.typicode.com/comments
// Then process the data to create a summary dashboard.

// Expected Return Format
// {
//   summary: {
//     totalUsers: 10,
//     totalPosts: 100,
//     totalComments: 500,
//     avgPostsPerUser: 10,
//     avgCommentsPerPost: 5
//   },
//   topUsers: [
//     {
//       name: "Leanne Graham",
//       postCount: 10,
//       commentCount: 15  // comments on their posts
//     }
//     // ... top 3 users by post count
//   ],
//   recentPosts: [
//     // Last 5 posts (highest IDs)
//   ]
// }

async function getDashboardSummary() {
  try {
    const [usersRes, postsRes, commentsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);

    if (!usersRes.ok || !postsRes.ok || !commentsRes.ok) {
      throw new Error("One or more data sources failed to fetch.");
    }

    const [users, posts, comments] = await Promise.all([
      usersRes.json(),
      postsRes.json(),
      commentsRes.json(),
    ]);

    console.log("📈 Data received successfully. Processing stats...");

    const totalUsers = users.length;
    const totalPosts = posts.length;
    const totalComments = comments.length;

    const avgPostsPerUser = totalUsers > 0 ? totalPosts / totalUsers : 0;
    const avgCommentsPerPost = totalPosts > 0 ? totalComments / totalPosts : 0;

    const recentPosts = [...posts].sort((a, b) => b.id - a.id).slice(0, 5);

    const usersWithStats = users.map((user) => {
      const userPosts = posts.filter((post) => post.userId === user.id);
      const postCount = userPosts.length;
      const userPostIds = userPosts.map((post) => post.id);
      const commentCount = comments.filter((comment) =>
        userPostIds.includes(comment.postId),
      ).length;

      return {
        name: user.name,
        postCount: postCount,
        commentCount: commentCount,
      };
    });

    const topUsers = usersWithStats
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 3);

    return {
      summary: {
        totalUsers,
        totalPosts,
        totalComments,
        avgPostsPerUser: Number(avgPostsPerUser.toFixed(2)),
        avgCommentsPerPost: Number(avgCommentsPerPost.toFixed(2)),
      },
      topUsers,
      recentPosts,
    };
  } catch (error) {
    console.error("Dashboard Generation Failed:", error.message);
    throw error;
  }
}

getDashboardSummary()
  .then((dashboardData) => {
    console.log("result:", JSON.stringify(dashboardData, null, 2));
  })
  .catch((err) => console.log("Failed to load dashboard."));

console.log("Before");
getUser(1, handleUser);
console.log("After");

function displayCommits(commits) {
  console.log("Commits:", commits);
}

function handleRepos(repos) {
  getCommits(repos[0], displayCommits); // Assuming we only get commits for the first repo
}

function handleUser(user) {
  getRepos(user.gitHubUsername, handleRepos);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database");
    callback({ id: id, gitHubUsername: "mosh" });
  }, 2000);
}

function getRepos(username, callback) {
  setTimeout(() => {
    console.log("Getting all repositories for", username);
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log("Getting commits for", repo);
    callback(["commit1", "commit2"]);
  }, 2000);
}

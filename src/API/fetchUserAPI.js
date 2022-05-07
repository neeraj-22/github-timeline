export const getUser = async (username) => {
    return await fetch(`https://api.github.com/users/${username}`, {method : "GET"})
    .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
}

export const getUserRepos = async (username, fetchRepoCount) => {
  return await fetch(`https://api.github.com/users/${username}/repos?&per_page=${fetchRepoCount}`, {method : "GET"})
  .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}
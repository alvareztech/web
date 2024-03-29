async function getRepos() {
  let res = await fetch('https://api.github.com/users/alvareztech/repos?sort=pushed&per_page=100', {
    headers: {
      'Authorization': 'Bearer ' + process.env.GITHUB_API_KEY
    },
    cache: 'no-store'
  })
  return await res.json();
}

export default async function Page() {
  const repos = await getRepos();
  return (
    <div className="py-8 px-16">
      <h1 className="text-4xl dark:text-white">Repositories</h1>
      <p className="text-xl dark:text-white">My Top 100 Public Repositories</p>
      <p className="text-base text-colorA">{new Date().toLocaleString()}</p>
      <div className="content py-8">
        <ul>
          {
            Array.isArray(repos) && repos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank">{repo.name}</a> ({repo.language}) ⭐️ {repo.stargazers_count} - <a target="_blank" href={repo.html_url + "/issues"}>📬 {repo.open_issues_count}</a> - <a target="_blank" href={repo.html_url + "/network/members"}>🍴 {repo.forks_count}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

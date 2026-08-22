const GITHUB_API_URL = "https://api.github.com/search/repositories";

export const searchRepositories = async (query) => {
  const response = await fetch(
    `${GITHUB_API_URL}?q=${encodeURIComponent(query)}&sort=stars&order=desc`,
  );

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const data = await response.json();

  return data.items;
};

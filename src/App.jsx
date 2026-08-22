import { useCallback, useState } from "react";
import SearchBar from "./components/SearchBar";
import LoadingSpinner from "./components/LoadingSpinner";
import { searchRepositories } from "./services/githubApi";
import "./App.css";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = useCallback(async (query) => {
    setLoading(true);
    setError("");

    try {
      const results = await searchRepositories(query);
      setRepositories(results);
    } catch (error) {
      console.error(error);
      setRepositories([]);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <main className="app">
      <h1>GitHub Repository Explorer</h1>

      <p>Search and discover GitHub repositories.</p>

      <SearchBar onSearch={handleSearch} />

      {loading && <LoadingSpinner />}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && repositories.length === 0 && (
        <p className="empty-message">Search for a repository to get started.</p>
      )}

      <div className="repository-list">
        {repositories.map((repository) => (
          <div key={repository.id} className="repository-card">
            <h2>{repository.name}</h2>

            <p>{repository.description || "No description available."}</p>

            <div className="repository-info">
              <span>⭐ {repository.stargazers_count}</span>
              <span>🍴 {repository.forks_count}</span>
              <span>{repository.language || "Not specified"}</span>
            </div>

            <a
              href={repository.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;

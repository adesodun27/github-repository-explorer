import { useEffect, useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query.trim()) {
      return;
    }

    const timer = setTimeout(() => {
      onSearch(query.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search GitHub repositories..."
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;

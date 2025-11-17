import "./Search.css";

export default function Search({ searchInput, setSearchInput, applySearch }) {
  return (
    <div className="search-wrapper">
      <h3 className="search-title">Search for Items</h3>

      <div className="search-row">
        <input
          type="text"
          placeholder="Type to search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="s-input"
        />

        <button onClick={applySearch} className="s-btn">
          Search
        </button>
      </div>
    </div>
  );
}


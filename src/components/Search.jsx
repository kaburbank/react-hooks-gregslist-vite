function Search({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={""}
        onChange={(e) => onSearch(e.target.value)}
      /> { // use new prop in the onChange to set state }
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

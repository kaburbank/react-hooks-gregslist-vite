import Search from "./Search";

// destructure onSearch from props object
function Header({ onSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      { // pass onSearch to the Search component }
      <Search onSearch={onSearch} />
    </header>
  );
}

export default Header;

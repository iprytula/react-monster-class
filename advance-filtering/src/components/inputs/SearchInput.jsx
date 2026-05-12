const SearchInput = ({ onChangeHandler }) => {
  return (
    <input
      name="search"
      type="text"
      placeholder="Search..."
      className="search-input"
      onChange={onChangeHandler}
    />
  );
};

export default SearchInput;
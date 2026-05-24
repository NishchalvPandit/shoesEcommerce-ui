function SearchBar({ value, onChange, placeholder = 'Search shoes...' }) {
  return (
    <input
      type="search"
      className="search-bar"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default SearchBar

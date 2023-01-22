import SearchIcon from "../assets/images/icon-search.svg";

const Search = () => {
  return (
    <div className="dictionary__search">
      <form>
        <input type="text" placeholder="Search for a word" />
        <img src={SearchIcon} alt="search icon" />
      </form>
    </div>
  )
}

export default Search
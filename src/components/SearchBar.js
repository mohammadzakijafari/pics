import { useState } from "react";
import './SearchBar.css';

function SearchBar ({ onSubmit }) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(searchTerm);
    }
    const handleSearchTermClick = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
        <div className="search-bar">
            <form onSubmit = {handleFormSubmit}>
                <label className="search-label"> Enter Your Search Term </label>
                <input value = {searchTerm} onChange={handleSearchTermClick} className="search-input" />
            </form>
        </div>
    )
}

export default SearchBar;
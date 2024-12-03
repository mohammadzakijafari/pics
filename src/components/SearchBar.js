import { useState } from "react";

function SearchBar ({ onSubmit }) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(searchTerm);
    }
    const handleSearchTermClick = (event) => {
        setSearchTerm(event.target.value);
        console.log(event.target.value);
    }
    return (
        <form onSubmit = {handleFormSubmit}>
            <input value = {searchTerm} onChange={handleSearchTermClick} />
        </form>
    )
}

export default SearchBar;
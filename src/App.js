import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App () {
    const handleSearchClick = async (searchTerm) => {
        
        const result = await searchImages(searchTerm);
    }
    return (
        <div className="">
            <SearchBar onSubmit = {handleSearchClick} />

            <ImageList />
        </div>
    )
}

export default App;
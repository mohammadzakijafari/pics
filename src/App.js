import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App () {

    const [images, setImages] = useState([]);

    const handleSearchClick = async (searchTerm) => {
        
        const result = await searchImages(searchTerm);
        setImages(result);
    }
    console.log(images);
    return (
        <div className="">
            <SearchBar onSubmit = {handleSearchClick} />

            <ImageList  images = { images } />
        </div>
    )
}

export default App;
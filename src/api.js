import axios from "axios";

const searchImages = async (term) => {
    
    const ACCESS_KEY=process.env.REACT_APP_ACCESS_KEY
    
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`  
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
}

export default searchImages;
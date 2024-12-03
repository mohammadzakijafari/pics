import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID MXuILwsehi7P_wMR4rXitQKRy1xMQmM75HvVpxTKKpI'
        },
        params: {
            query: term,
        },
    });

    
    return response.data.results;
}

export default searchImages;
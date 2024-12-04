function ImageShow ({ image }) {
    return (
        <div className="">
            <img src = {image.urls.small} alt = {image.urls.alt_description} />
        </div>
    )
}

export default ImageShow;
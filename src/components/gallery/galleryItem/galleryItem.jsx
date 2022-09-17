

function GalleryItem({image}){
    return(
        <div>
            <img src = {image.url}/>
            <p>{image.description}</p>
            <button>Like</button>
            <p>{image.likes}</p>
        </div>
    )
};

export default GalleryItem;

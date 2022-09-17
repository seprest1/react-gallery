import './galleryItem.css'

function GalleryItem({image}){
    return(
        <div className="gallery-item">
            <img src={image.url} className="gallery-image"/>
            <p>{image.description}</p>
            <button>Like</button>
            <p>{image.likes}</p>
        </div>
    )
};

export default GalleryItem;

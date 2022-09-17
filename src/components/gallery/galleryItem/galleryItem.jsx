import './galleryItem.css'

function GalleryItem({image}){
    return(
        <div class="gallery-item">
            <img src={image.url} class="gallery-image"/>
            <p>{image.description}</p>
            <button>Like</button>
            <p>{image.likes}</p>
        </div>
    )
};

export default GalleryItem;

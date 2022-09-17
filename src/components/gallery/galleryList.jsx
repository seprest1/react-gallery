import GalleryItem from './GalleryItem/GalleryItem';
import './Gallery.css';

function Gallery ({imagesArray, fetchGallery}){
    console.log(`Gallery images in Gallery function:`, imagesArray);

    return (
        <div className="gallery-container">
        {imagesArray.map(image => (
            <GalleryItem 
                image={image}
                key={image.id}
                fetchGallery={fetchGallery}
                />))}
        </div>
    )
};

export default Gallery;
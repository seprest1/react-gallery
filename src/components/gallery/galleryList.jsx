import GalleryItem from '../gallery/galleryItem/galleryItem';

function Gallery ({imagesArray}){
    console.log(`Gallery images in Gallery function:`, imagesArray);

    return (
        imagesArray.map(image => (
            <GalleryItem 
                image = {image}
                key = {image.id}
                />))
    )
};

export default Gallery;
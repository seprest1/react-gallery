import React, { useState } from 'react';
import '../Gallery.css'
import axios from 'axios';

function GalleryItem({image, fetchGallery}){

    const likeCounter = () => {
        let newLikeCount = image.likes + 1;
        console.log(newLikeCount);
        axios ({
            method: 'PUT',
            url: `/gallery/likes/${image.id}`,
            data: {newLikeCount}
        }).then((response) => {
            fetchGallery();
        }).catch((error) => {
            console.log('Error with like count, in PUT route', error);
        })
    }

    const renderLikeMessage = (image) => {
        switch(image.likes){
            case 0:
                return `Press Like Above!`
            case 1: 
                return `1 Like`
            default: 
                return `${image.likes} Likes`
        }
    }

    const [displayPicture, setDisplayPicture] = useState();

    const toggleDescription = (image) => {
        setDisplayPicture(!displayPicture);
    }

    return(
        <div key={image.id} className="gallery-item">
            {displayPicture === false ? <div className="description" onClick={toggleDescription}>{image.description}</div> :
            <img src={image.url} className="gallery-image" onClick={toggleDescription}/>}

            <button onClick={likeCounter} className="likeButton">Like</button>
            
            <p className="likeCounts">{renderLikeMessage(image)}</p>
        </div>
    )
};

export default GalleryItem;

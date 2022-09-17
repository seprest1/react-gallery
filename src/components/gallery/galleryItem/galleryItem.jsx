import React from 'react';
import '../gallery.css'
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

    function renderLikeMessage(image){
        switch(image.likes){
            case 0:
                return `Press Like Above!`
            case 1: 
                return `1 Like`
            default: 
                return `${image.likes} Likes`
        }
    }

    return(
        <div className="gallery-item">
            {image.displaypicture ? 
                <img src={image.url} className="gallery-image"/> : 
                <div className="text-box">{image.description}</div>}

            <button onClick={likeCounter} className="likeButton">Like</button>
            <p className="likeCounts">{renderLikeMessage(image)}</p>
        </div>
    )
};

export default GalleryItem;

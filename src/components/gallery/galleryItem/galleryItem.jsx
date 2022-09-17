import React, { useState } from 'react';
import '../Gallery.css'
import axios from 'axios';

function GalleryItem({image, fetchGallery}){

    const sendLike = () => {
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
                return ''
            default: 
                return image.likes
        }
    }

    const [displayPicture, setDisplayPicture] = useState();

    const toggleDescription = () => {
        setDisplayPicture(!displayPicture);
    }

    const handleDelete = () => {
        axios ({
            method: 'DELETE',
            url: `/gallery/delete/${image.id}`
        }).then((response) => {
            fetchGallery();
        }).catch((error) => {
            console.log('Error deleting image', error);
        });
    };

    return(
        <div key={image.id} className={"gallery-item"}>
            {displayPicture === false ? 
                <div className="description-section" onMouseLeave={toggleDescription}>
                    <div className="description">{image.description}</div>
                    <div>
                        <button onClick={handleDelete}>x</button>
                    </div>
                </div> 
                :  
                <div className="image-section">
                    <img src={image.url} className="gallery-image" onMouseEnter={toggleDescription}/>
                    <button onClick={sendLike} className="like-button">♥</button>
                    <p className="like-counts">{renderLikeMessage(image)}</p>
                </div>}
        </div>
    )
};

export default GalleryItem;

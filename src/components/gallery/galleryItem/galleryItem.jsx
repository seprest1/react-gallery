import React, { useState } from 'react';
import '../Gallery.css'
import axios from 'axios';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function GalleryItem({image, fetchGallery}){

    //PUT route to update like count
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

    //leaves section blank if there aren't any likes
    const renderLikeMessage = (image) => {
        switch(image.likes){
            case 0:
                return ''
            default: 
                return image.likes
        }
    }

    const [displayPicture, setDisplayPicture] = useState();

    //switches between picture/description
    const toggleDescription = () => {
        setDisplayPicture(!displayPicture);
    }

    //DELETE route
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

    return(     //ternerary to toggle between picture/description
        <div key={image.id} className={"gallery-item"}>
            {displayPicture === false ? 
                <div className="description-section" onMouseLeave={toggleDescription}>
                    <div className="delete-button">
                        <button onClick={handleDelete}>x</button>
                    </div>
                    <div className="description">{image.description}</div>
                </div> 
                :  
                <div className="image-section">                                                             
                    <img src={image.url} className="gallery-image" onMouseEnter={toggleDescription} onClick={toggleDescription}/> 
                    <IconButton onClick={sendLike} className="like-button"><FavoriteBorderIcon/></IconButton>
                    <p className="like-counts">{renderLikeMessage(image)}</p>
                </div>}
        </div>
    )
};

export default GalleryItem;

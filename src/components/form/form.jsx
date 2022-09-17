import React, { useState } from 'react'; 
import axios from 'axios';
import './Form.css';
import CustomizedButtons from './Button';

function Form ({fetchGallery}){
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState ('');

    const createImage = () => {
        console.log(url, description);
        axios({
            method: 'POST',
            url: '/gallery',
            data:{
                url: url,
                description: description,
                likes: 0
            }
        }).then((response) => {
            fetchGallery();
            setUrl('');
            setDescription('');
        }).catch((error) => {
            console.log('createImage failed', error);
          });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createImage();
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <input 
                placeholder="Image.com"
                type="text"
                value={url}
                onChange={(e) => {setUrl(e.target.value)}} />
            <input 
                placeholder="Description"
                type="text"
                value={description}
                onChange={(e) => {setDescription(e.target.value)}} />
            <CustomizedButtons />
        </form>
    )
}

export default Form;
import React, {useState} from 'react'; 
import axios from 'axios';

function Form (fetchGallery){
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState ('');

    const createImage = () => {
        axios({
            method: 'POST',
            url: '/gallery',
            data: {
                url: url,
                description: description,
                likes: 0
            }
        }).then((response) => {
            fetchGallery();
            setUrl('');
            setDescription('');
        }).catch((error) => {
            console.log('createImage failed.', error);
        });
    }


    return(
        <div className="form" onSubmit={createImage}>
            <input 
                placeholder="Image.com"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}/>
            <input 
                placeholder="Description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}/>
            <button>Submit</button>
        </div>
    )
}

export default Form;
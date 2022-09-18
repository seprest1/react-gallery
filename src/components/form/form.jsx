import React, {useState} from 'react'; 
import axios from 'axios';
import { IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function Form ({fetchGallery}){
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
            setFormStatus('');
        }).catch((error) => {
            console.log('createImage failed.', error);
        });
    }

    const [formStatus, setFormStatus] = useState('');

    const openForm = () => {
        setFormStatus('open');
    }
    // onMouseLeave={() => {setFormStatus('')}}
    return(
        <>
        {formStatus === 'open' ?
            <div className="form" >
                <TextField 
                    id="outlined-basic" 
                    label="url" 
                    variant="outlined"
                    placeholder="Enter Text.."
                    size="small"
                    color="secondary"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="inputs"
                    required/>
                <TextField 
                    id="outlined-basic" 
                    label="caption" 
                    variant="outlined" 
                    placeholder="Enter Text.."
                    size="small"
                    color="secondary"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="inputs"
                    required/>
                <IconButton onClick={createImage}><ArrowUpwardIcon/></IconButton>
            </div>
            :
            <IconButton onClick={openForm} className="open-button"><AddIcon/></IconButton>}
        </>
    )
}

export default Form;
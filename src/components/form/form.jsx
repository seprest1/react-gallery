import React, {useState} from 'react'; 
import axios from 'axios';
import { IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function Form ({fetchGallery}){
    const [url, setUrl] = useState('');                         
    const [description, setDescription] = useState ('');

    //POST ROUTE
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
            fetchGallery();     //render DOM
            setUrl('');
            setDescription('');     //set inputs back to blank
            setFormStatus('');
        }).catch((error) => {
            console.log('createImage failed.', error);
        });
    }

    const [formStatus, setFormStatus] = useState('');       //whether the form is opened up

    const openForm = () => {
        setFormStatus('open');
    }
    return(                     
        <>                                                               
        {formStatus === 'open' ?        //ternary to determine if form should be open, otherwise present + button     
            <div className="form"  onMouseLeave={() => {setFormStatus('')}}>        
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
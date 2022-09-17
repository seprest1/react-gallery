import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Gallery from '../Gallery/GalleryList';
import Form from '../Form/Form'

function App() {
  useEffect(() => {
    fetchGallery();
  }, []);

  const [gallery, setGallery] = useState([]);

  const fetchGallery = () => {
    axios({
      method: 'GET', 
      url: '/gallery'
    }).then((response) => {
      console.log(response.data);
      setGallery(response.data);
    }).catch((error) => {
      console.log('fetchGallery failed', error);
    });
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <Form />
        <Gallery imagesArray={gallery}/>
      </div>
    );
}

export default App;

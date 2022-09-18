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

  //render DOM with images
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
          <h1 className="App-title">snapshot</h1>
        </header>
        <Gallery imagesArray={gallery} fetchGallery={fetchGallery}/>
        <Form fetchGallery={fetchGallery}/>
        <footer></footer>
      </div>
    );
}

export default App;

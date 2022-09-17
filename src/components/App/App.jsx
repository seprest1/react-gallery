import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

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
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;

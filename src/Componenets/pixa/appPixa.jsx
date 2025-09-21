import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PixaInfo from '../pixa/pixaInfo';
import PixaInput from '../pixa/pixaInput';

export default function AppPixa() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    doApi("cat"); 
  }, []);

  const doApi = async (query) => {
    setImages([]);
    const apiKey = "52395631-b307cd48e5a46f79eacdd55b6"; 
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo`;

    try {
      const resp = await axios.get(url);
      console.log(resp.data);
      setImages(resp.data.hits);
    } catch (err) {
      console.log(err);
      alert("Problem fetching images");
    }
  };

  return (
    <div className="container">
      <h2>Pixa App</h2>
      <PixaInput doApi={doApi} />
      <PixaInfo images={images} />
    </div>
  );
}

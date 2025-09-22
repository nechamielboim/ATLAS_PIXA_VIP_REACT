import React, { useEffect, useState } from 'react';
import PixaInfo from '../pixa/pixaInfo';
import PixaInput from '../pixa/pixaInput';
import retData from './pixaService';

export default function AppPixa() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    doApi("cat"); 
  }, []);

  const doApi = async (query) => {
    setImages([]);
    const localKey = `pixa_${query}`;
    const cached = localStorage.getItem(localKey);

    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        setImages(parsed);
        return;
      } catch (e) {
        console.log("Problem parsing cache", e);
      }
    }

    try {
      const images = await retData(query,'52395631-b307cd48e5a46f79eacdd55b6');
      console.log(images);
      setImages(images);
      localStorage.setItem(localKey, JSON.stringify(images));
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

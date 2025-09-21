import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AtlasInfo from './atlasInfo';
import AtlasInput from './atlasInput';
export default function AppAtlas() {
    const [infoItem,setInfoItem] = useState({});
    useEffect(()=>{
        doApi("israel")
    },[])

    const doApi = async(_country)=>{
        setInfoItem({});
        let url = "https://restcountries.com/v3.1/name/"+_country
        try{
            let resp = await axios.get(url);
            console.log(resp.data);
            setInfoItem(resp.data[0]);
        }
        catch(err){
             console.log(err);
             alert("problem")
        }
    }

    const doApiCountryCode = async(_countryCode)=>{
       setInfoItem({});
       let url
       try{
          let resp = await axios.get(url);
          console.log(resp.data);
          setInfoItem(resp.data[0]);
       }
       catch(err){
          console.log(err);
          alert("problem")
       }
    }
  return (
    <div className='container'>
      <h2>Atlas app</h2>
      <AtlasInput doApi={doApi}></AtlasInput>
      <AtlasInfo item={infoItem} doApiCountryCode={doApiCountryCode}></AtlasInfo>
    </div>
  )
}
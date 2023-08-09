import React,{useState,useEffect} from 'react';

const Navigation=()=>{   
    const [imageUrls,setImageUrls]=useState([]);
     useEffect(()=>{
     fetch('http://localhost:2000/qrImage')
          .then(response=>{return response.blob()})
          .then(imageBlob=>{
              const imageUrl=URL.createObjectURL(imageBlob);
              setImageUrls(imageUrl);
          })
          .catch(error=>console.error(`Error fetching images:`,error));
    },[]);
    console.log(imageUrls);
    return(
        <div>
          <h2>Generated QR Code</h2>
            <img  src={imageUrls} alt="My Qr Code"/>
        </div>
    )
}
export default Navigation;
import React from 'react'
import { useState} from 'react';
import {useNavigate} from 'react-router-dom'

const UserField=()=>{
    const navigate = useNavigate();
    const [value,setValue]=useState('');
    const handleClick=async(e)=>{
        e.preventDefault();
        fetch('http://localhost:2000/generateQR',{
            method:'post',
            body:JSON.stringify({
                userText:value
            }),
            headers:{
                'Content-type':'application/json',
            }
        });
        // result=await result.json();
        // console.warn(result);
        navigate('/qrImage')
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return(
        <div className='userInputs'>
            <h1>Convert your text to QR code</h1>
            <input type="text" onChange={handleChange} value={value} name='userText' placeholder="enter your text to convert to QR...."/>
            <button onClick={handleClick} className="userButton" type="button">Generate</button>
        </div>
    )
}

export default UserField;
const express=require('express');
const app=express();
const cors=require('cors');
const qr=require('qrcode');
const fs=require('fs');
const path=require('path');
const { v4: uuidv4 } = require('uuid');

const qrcodeName='qrcode.png';

app.use(express.json());
app.use(cors());
// app.use('/qrImage', express.static(path.join(__dirname, 'qrcode.png')));
app.post('/generateQR', (req,res)=>{
    const data=req.body;
    const newData=data.userText;
    const uniqueID=uuidv4();
    const generatedQR=`qrcode_${uniqueID}.png`;
    qr.toFile(generatedQR,newData,{
        color:{
            dark:'#000',
            light:'#fff'
        }
    },(error)=>{
        if(error){
            console.log('Error generating qr code: ',error);
        }else{
            console.log("Qr code generated successfully.");
            res.json({ uniqueID });
        }
});
// console.log(req.body);
});


app.get('/qrimage/:uniqueID',(req,res)=>{
    const { uniqueID } = req.params;
    const qrImagePath=path.join(__dirname,`qrcode_${uniqueID}.png`);
    console.log(qrImagePath);
    const imageStream=fs.createReadStream(qrImagePath);
    res.writeHead(200,{'Content-Type':'image/png'});
    imageStream.pipe(res);
});


app.listen(2000,(req,res)=>{
    console.log("server listening on http://localhost:2000");
});
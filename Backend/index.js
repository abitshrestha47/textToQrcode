const express=require('express');
const app=express();
const cors=require('cors');
const qr=require('qrcode');
const fs=require('fs');
const path=require('path');

const qrcodeName='qrcode.png';

app.use(express.json());
app.use(cors());
app.use('/qrImage', express.static(path.join(__dirname, 'qrcode.png')));
app.post('/generateQR', (req,res)=>{
    const data=req.body;
    const newData=data.userText;
    qr.toFile(qrcodeName,newData,{
        color:{
            dark:'#000',
            light:'#fff'
        }
    },(error)=>{
        if(error){
            console.log('Error generating qr code: ',error);
        }else{
            console.log("Qr code generated successfully.");
        }
});
// console.log(req.body);
});


app.get('/qrimage',(req,res)=>{
    const qrImagePath=path.join(__dirname,'qrcode.png');
    console.log(qrImagePath);
    const imageStream=fs.createReadStream(qrImagePath);
    res.writeHead(200,{'Content-Type':'image/png'});
    imageStream.pipe(res);
});


app.listen(2000,(req,res)=>{
    console.log("server listening on http://localhost:2000");
});
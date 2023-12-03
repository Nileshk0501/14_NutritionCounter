const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const UserModel = require('./models/Users')
const { spawn } = require('child_process');

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017/ssdproject')


//python -------------
let options={
    scriptPath:'./',
    args:["hey hi"]
}


//-------------------
let cur="";
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/Images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
})
const upload = multer({
    storage:storage
})

// app.post('/upload',upload.single('file'),(req,res)=>{
//     const pythonProcess = spawn('python3', ['tester.py', req.file.filename]);

//     let pythonOutput = '';  // Variable to store the Python script output

//     pythonProcess.stdout.on('data', (data) => {
//         pythonOutput += data;
//         console.log(pythonOutput)
//     });
//     UserModel.create({image:req.file.filename,output:pythonOutput})
//     .then(result => res.json(result))
//     .catch(err => console.log(err))
    
    

// })
app.post('/upload', upload.single('file'), (req, res) => {
    const pythonProcess = spawn('python3', ['nutrients.py', req.file.filename]);

    let pythonOutput = '';  // Variable to store the Python script output

    pythonProcess.stdout.on('data', (data) => {
        pythonOutput += data;
        console.log(pythonOutput);
    });
    let index = 0;
    for(let i =0; i<pythonOutput.length;i++)
    {
        let x = pythonOutput.charAt(i);
        if(x>='0' && x<= '9')
        index = i;
    }
    var newstr = pythonOutput.substring(index+1);
   
    cur = req.file.filename;
    pythonProcess.on('close', (code) => {
        // Code to execute after the Python process finishes
        UserModel.create({ image: req.file.filename, output: pythonOutput })
            .then(result => res.json(result))
            .catch(err => console.log(err));
    });
});


app.get('/getImage',(req,res)=>{
    UserModel.find()
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
// Add this route in your server code


// ADDED CODE
app.post('/search', (req, res) => {
    console.log(cur);
    UserModel.findOne({ image: cur },'output')
    .then(data => {
        if (!data) {
          res.status(404).json({ message: 'Not found' });
        } else {
            console.log("helloo"+data.output)
          res.json(data.output);
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Internal server error' });
      });  
  });
//

app.listen(3001, ()=>{
    console.log("server is running")
    // PythonShell.run('tester.py',options,(err,res)=>{
    //     if(err)console.log(err)
    //     if(res)console.log(res)
    // })
})
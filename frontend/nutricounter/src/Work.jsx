import React, { useState, useEffect } from 'react';
import './Work.css'; // Create a CSS file (Work.css) for styling
import axios from 'axios';
import { Link } from 'react-router-dom';

//import { useHistory } from 'react-router-dom'

const Work = () => {
    const [file, setFile] = useState();
    const [image, setImage] = useState();
    const [users, setUsers] = useState("");
    // ADDED LINE
    const [output, setOutput] = useState("");
    //
    // const history = useHistory();
        let obj = {};
        const handleUpload = (e) => {
            const formdata = new FormData();
            formdata.append('file', file);
            axios.post('http://localhost:3001/upload', formdata)
            .then(res => {console.log(res);
            
        })
            .catch(err => console.log(err));
    };
    const finder =(e)=>{
        axios.get('http://localhost:3001/search')
            .then(users => setUsers(users.data.output) )
            .catch(err => console.log(err));
            obj.fn = user.output
        }
    // added line
    const handleSearch = () => {
        const formdata = new FormData();
        formdata.append('filename', file);
        axios.post('http://localhost:3001/search', formdata)
            .then(response => {console.log(response);
            
            setOutput(response.data);
          })
          .catch(error => {
            console.error('Error searching:', error);
          });
    //     fetch('http://localhost:3001/search', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ filename : file }),
    // })
    //       .then(response => {
    //         console.log(response)
    //         setOutput(response.body);
    //       })
    //       .catch(error => {
    //         console.error('Error searching:', error);
    //       });
    //       console.log(users)
      };
    
    //
//   useEffect(() => {
//     axios.get('http://localhost:3001/getOutput')
//       .then(users => setUsers(users.data) )
//       .catch(err => console.log(err));
//       users.localeCompare(user=>{
//         obj.fn = user.output
//       })
//   }, []);

  return (
    <div className="work-container">
       <h1 className="upload-heading">Upload Your Images Here!!</h1>
      <label className="file-label">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        Choose File
      </label>
      <button className="upload-button" onClick={handleUpload}>Upload!</button>
      <br/>
      {/* <Link to="/answer" state={obj} > */}
      <button className="upload-button" onClick={handleSearch}>Aanalyze</button>
      {/* </Link> */}
      <div>
        <p>Output:</p>
        <pre>{output}</pre>
      </div>
    </div>
  );
};
export default Work;
import ReactPlayer from 'react-player'
import './App.css';
import React from 'react';
import Records from './Records.json'
function App() {
  
  return (
    <div class="row-md-12">
      <div class='col-md-3'></div>
    <div class="col-md-6">
      {Records.map(record =>{
    return(
<div className='box'> 
      <ReactPlayer
        url={record.url}
         />
         <br/>
         <p>{record.videoname}</p>

      </div> 
      
      )  

      })
    }
     
         </div>
         <div class='col-md-3'></div>
         </div>
         
  );

}

export default App;

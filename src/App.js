import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Grid from './comps/Grid';
import Modal from './comps/Modal';
import { useState } from 'react';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <Grid setSelectedImg={setSelectedImg}/>
      {selectedImg && (
         <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
      )}
    </div>
  );
}

export default App;

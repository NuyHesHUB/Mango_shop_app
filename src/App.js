
import './App.css';
import React from 'react';
import Mainpage from './components/Mainpage';
import {Route, Routes} from 'react-router-dom'
import ProductPage from './components/ProductPage';
import UploadPage from './components/UploadPage';

function App() {
  /* https://30fee64e-3a4a-4cb2-815b-746a1a61d93f.mock.pstmn.io */
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mainpage/>}></Route>
        <Route path="/ProductPage/:id" element={<ProductPage/>}></Route>
        <Route path="/UploadPage" element={<UploadPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
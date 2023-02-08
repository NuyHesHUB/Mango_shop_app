
import './App.css';
import React from 'react';
import Mainpage from './components/Mainpage';
import {Route, Routes, Link, useNavigate} from 'react-router-dom'
import ProductPage from './components/ProductPage';
import UploadPage from './components/UploadPage';
import {Button} from "antd"
import { DownloadOutlined } from '@ant-design/icons';

function App() {
  /* https://30fee64e-3a4a-4cb2-815b-746a1a61d93f.mock.pstmn.io */
  let navigate=useNavigate();
  return (
    <div className="App">
        <body id="body">
            <div id="header">
                <div id="header-area">
                    <Link to path="/"><img src="../images/icons/logo.png" alt="logo" /></Link>
                    <Button size='large' icon={<DownloadOutlined/>} onClick={() => {navigate('/UploadPage')}}>상품 업로드</Button>
                </div>
            </div>
            <Routes>
            <Route path="/" element={<Mainpage/>}></Route>
            <Route path="/ProductPage/:id" element={<ProductPage/>}></Route>
            <Route path="/UploadPage" element={<UploadPage/>}></Route>
            </Routes>
        </body>
        <div id="footer">
            <Link to="/about">회사소개</Link>
            <Link to="/policy">이용약관</Link>
            <Link to="/sales">통신판매업:123-1234</Link>
            <Link to="/license">사업자등록번호:456-78-123456</Link>
        </div>
    </div>
  );
}

export default App;
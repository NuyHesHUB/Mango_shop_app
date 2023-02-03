import React,{useEffect} from 'react';
import './Mainpage.css';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Mainpage = () => {
    let [products,setProducts] = React.useState([]);
    useEffect(() => {
        axios.get('https://30fee64e-3a4a-4cb2-815b-746a1a61d93f.mock.pstmn.io/products')
        .then((result) => {
            const products=result.data.products;
            setProducts(products);
        })
        .catch((error) => {
            console.log(`통신실패:${error}`)
        })
    },[]);


    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="./images/icons/logo.png" alt="logo" />
                </div>
            </div>
            <div id="body">
                <div id="banner">
                    <img src="./images/banners/banner1.png" alt="mainImg" />
                </div>
                <h1>Products</h1>
                <div id="product-list">
                    {products.map((product,idx) => {
                        //console.log(product);
                        return(
                            <div className="product-card" key={idx}>
                                <Link className='product-link' to={`/ProductPage/${idx}`}>
                                    <div>
                                        <img src={product.imageUrl} alt={product.name} className="product-img" />
                                    </div>
                                    <div className="product-contents">
                                        <span className="product-name">{product.name}</span>
                                        <span className="product-price">{product.price}</span>
                                        <span className="product-seller">
                                            <img src="./images/icons/avatar.png" alt="avatar" className="product-avatar" />
                                            <span>{product.seller}</span>
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div id="footer">
                <Link to="/about">회사소개</Link>
                <Link to="/policy">이용약관</Link>
                <Link to="/sales">통신판매업:123-1234</Link>
                <Link to="/license">사업자등록번호:456-78-123456</Link>
            </div>
        </div>
    );
};

export default Mainpage;
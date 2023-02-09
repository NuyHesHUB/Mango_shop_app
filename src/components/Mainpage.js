
import React,{useState, useEffect} from 'react';
import './Mainpage.css';
import axios from 'axios';
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'
import { Carousel } from 'antd';
import relativeTime from 'dayjs/plugin/relativeTime';
import {API_URL} from '../config/constants'


dayjs.extend(relativeTime)
const Mainpage = () => {
    let [products,setProducts] = React.useState([]);
    const [banners, setBanners] =useState([]);
    useEffect(() => {
        //axios.get('https://30fee64e-3a4a-4cb2-815b-746a1a61d93f.mock.pstmn.io/products')
        axios.get(`${API_URL}/products`)
        .then((result) => {
            const products=result.data.product;
            setProducts(products);
            console.log(result.data.product);
        })
        .catch((error) => {
            console.log(`통신실패:${error}`)
        })

        axios.get(`${API_URL}/banners`)
        .then((result) => {
            const banners=result.data.banners;
            setBanners(banners);
            
        })
        .catch((error) => {
            console.error('에러발생:',error);

        })
    },[]);

    
    return (

        <div>
            {/* <div id="header">
                <div id="header-area">
                    <img src="./images/icons/logo.png" alt="logo" />
                </div>
            </div> */}{/* App.js로 이동 */}
            {/* <div id="body"> */}
            <Carousel autoplay autoplaySpeed={3000}>
                {banners.map ((banner) => {
                    return(
                        <Link to={banner.href} key={banner}>
                            <div id="banner" >
                                {/* <img src="./images/banners/banner1.png" alt="mainImg" /> */}
                                <img src={`${API_URL}/${banner.imageUrl}`} alt="mainImg" />
                            </div>
                        </Link>
                    )
                })}
            </Carousel>
                <h1>Products</h1>
                <div id="product-list">
                    {products.map((product,idx) => {
                        //console.log(product);
                        return(
                            <div className="product-card" key={idx}>
                                {product.soldout === 1 ? <div className='product-blur'></div> : null}
                                <Link className='product-link' to={`/ProductPage/${product.id}`}>
                                    <div>
                                        <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} className="product-img" />
                                    </div>
                                    <div className="product-contents">
                                        <span className="product-name">{product.name}</span>
                                        <span className="product-price">{product.price}</span>
                                        <div className='product-footer'>
                                            <span className="product-seller">
                                                <img src="./images/icons/avatar.png" alt="avatar" className="product-avatar" />
                                                <span>{product.seller}</span>
                                            </span>
                                            {/* <span className='product-date'>{product.createdAt}</span> */}
                                            {/* <span className='product-date'>{dayjs(product.createdAt).format('YYYY-MM-DD')}</span> */}
                                            <span className='product-date'>{dayjs(product.createdAt).fromNow()}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            {/* </div> */}
            {/* <div id="footer">
                <Link to="/about">회사소개</Link>
                <Link to="/policy">이용약관</Link>
                <Link to="/sales">통신판매업:123-1234</Link>
                <Link to="/license">사업자등록번호:456-78-123456</Link>
            </div> */}{/* App.js로 이동 */}
        </div>
    );
};

export default Mainpage;
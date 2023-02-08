import React/* ,{useState} */ from 'react';
import './UploadPage.scss';
import {Button, /* Upload, */ message, InputNumber, Form, Input, Divider} from 'antd'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const UploadPage = () => {
    /* const [imageUrl, setImageUrl]=useState(null); */
    const history=useNavigate();
    const onSubmit = (values)=>{
        //console.log('Success',values);
        axios.post(``,{
            name: values.name,
            description: values.description,
            seller:values.seller,
            price:values.price,
            /*  imageUrl:imageUrl  */
        }).then((result)=>{
            console.log(result);
            history('/',{replace:true});
        }).catch((error)=>{
            console.log(error);
            message.error(`에러가 발생했습니다 ${error.message}`);
        })
    }
    const onChangeImage = (info)=>{
        /* if(){
            return;
        }
        if(){
            setImageUrl(imageUrl)
        } */
    }
    return (
        <div id='upload-container'>
            <Form name='uploadForm' onFinish={onSubmit}>
                <Form.Item name="upload" label={<div className='upload-label'>상품사진</div>}>
                    <div id="upload-img" onChange={onChangeImage}>
                        <img src="/images/icons/camera.png" alt="" />
                        <span>이미지를 업로드 해주세요</span>
                    </div>
                </Form.Item>
                <Divider/>
                <Form.Item name="seller" label={<span className='upload-label'>판매자명</span>} rules={[{required: true,message: '판매자명은 필수 입력사항입니다.',},]}>
                    <Input className='upload-name'  placeholder='이름을 입력해주세요' size='large'></Input>
                </Form.Item>
                <Divider/>
                <Form.Item name="name" label={<span className='upload-label'>상품명</span>} rules={[{required: true,message: '상품명은 필수 입력사항입니다.',},]}>
                    <Input className='upload-name'  placeholder='상품명을 입력해주세요' size='large'></Input>
                </Form.Item>
                <Divider/>
                <Form.Item name="price" label={<span className='upload-label'>판매가</span>} rules={[{required: true,message: '판매가는 필수 입력사항입니다.',},]}>
                    <InputNumber className='upload-price' min={0} placeholder='판매가를 입력해주세요' size='large'></InputNumber>
                </Form.Item>
                <Divider/>
                <Form.Item name="description" label={<span className='upload-label'>상품설명</span>} rules={[{required: true,message: '상품설명은 필수 입력사항입니다.',},]}>
                    <Input.TextArea id="product-description" showCount maxLength={300} placeholder='상품설명을 입력해주세요' size='large'></Input.TextArea>
                </Form.Item>
                <Divider/>
                <Form.Item>
                    <Button id='submit-button' size='large' htmlType='submit'>상품등록하기</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default UploadPage;
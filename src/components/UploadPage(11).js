
import React,{useState} from 'react';
import './UploadPage.scss';
import {Button, Upload, message, InputNumber, Form, Input, Divider} from 'antd'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { API_URL } from '../config/constants';


const UploadPage = () => {
    const [imageUrl, setImageUrl]=useState(null);
    const history=useNavigate();
    const onSubmit = (values)=>{
        //console.log('Success',values);
        axios.post(`${API_URL}/products`,{
            name: values.name,
            description: values.description,
            seller:values.seller,
            price:parseInt(values.price),
            imageUrl:imageUrl
        }).then((result)=>{
            console.log(result);
            history('/',{replace:true});
        }).catch((error)=>{
            console.log(error);
            message.error(`에러가 발생했습니다 ${error.message}`);
        })
    }
    const onChangeImage = (info)=>{
        if(info.file.status==='uploading'){
            return;
        }
        if(info.file.status==="done"){
            const response=info.file.response;
            const imageUrl=response.imageUrl;

            setImageUrl(imageUrl)
        } 
    }
    return (
        <div id='upload-container'>
            <Form name='uploadForm' onFinish={onSubmit} initiaValues={{price:0}}>
                <Form.Item name="upload" label={<div className='upload-label'>상품사진</div>}>
                    <Upload name="image" action={`${API_URL}/image`} listType='picture' showUploadList={false}  onChange={onChangeImage}>
                        {imageUrl ? (<img id='upload-img' alt='이미지' src={`${API_URL}/${imageUrl}`}/>
                        ):(
                        <div id="upload-img">
                            <img src="/images/icons/camera.png" alt="" />
                            <span>이미지를 업로드 해주세요</span>
                        </div>
                        )}
                    </Upload>
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
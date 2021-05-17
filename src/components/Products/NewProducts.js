import React from 'react'
import {Link} from 'react-router-dom'
import {Form, Input, Select} from 'antd'
import styled from 'styled-components'

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const input = styled.input `
    width: 281px;
    height: 35px;
    text-align: center;
    border: 1px solid grey;
    border-radius: 8px;
    letter-spacing: 0.57px;
     
`

const Button = styled.button`
    width: 221px;
    height: 35px;
    background: transparent linear-gradient(180deg, var(--unnamed-color-950e29) 0%, #710D21 100%) 0% 0% no-repeat padding-box;
    background: transparent linear-gradient(180deg, #950E29 0%, #710D21 100%) 0% 0% no-repeat padding-box;
    border:none;
    border-radius: 15px;
    font: normal normal medium 19px/29px Sofia Pro;
    letter-spacing: 0.57px;
    color: #F6F6FB;
    opacity: 1;
    margin-left:35px;
`

const CancelButton = styled.button `
    
    width: 221px;
    height: 35px;
    background: #8E8E8E 0% 0% no-repeat padding-box;
    border:none;
    border-radius: 15px;
    font: normal normal medium 19px/29px Sofia Pro;
    letter-spacing: 0.57px;
    color: #F6F6FB;
    opacity: 1;
    margin-left:35px;
`

function NewProducts() {

    const [form] = Form.useForm();

    return (
        <Form form={form} layout="vertical" size="medium"  >
            <Form.Item label="Product Title"  >
                <Input placeholder="product title" />
            </Form.Item>
            <Form.Item label="Regular price">
                <Input placeholder="regular price"/>
            </Form.Item>
            <Form.Item label="Sale Price">
                <Input placeholder="sale Price" />
            </Form.Item>
            <Form.Item label="Size">
                <Select defaultValue="small">
                    <Option value="samll">Small</Option>
                    <Option value="medium">Medium</Option>
                    <Option value="large">Large</Option>
                </Select>
            </Form.Item>
            <Form.Item label="SKU">
                <Input placeholder="SKU" />
            </Form.Item>
            <Form.Item label="Category">
                <Input placeholder="Category" />
            </Form.Item>
            <Form.Item>
                <Button>Add Product</Button>
            </Form.Item>
            <Form.Item>
                <CancelButton>Cancel</CancelButton>  
            </Form.Item>
        </Form>
    )
}

export default NewProducts

import React from 'react'
import {Link} from 'react-router-dom'
import {Form, Input} from 'antd'
import styled from 'styled-components'

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

function NewCustomer() {

    const [form] = Form.useForm();

    return (
        <Form form={form} layout="vertical" size="medium"  >
            <Form.Item label="Full Name"  >
                <Input placeholder="full name" />
            </Form.Item>
            <Form.Item label="Phone Number">
                <Input placeholder="phone no"/>
            </Form.Item>
            <Form.Item label="Email">
                <Input placeholder="email" />
            </Form.Item>
            <Form.Item label="Address">
                <Input placeholder="address" />
            </Form.Item>
            <Form.Item label="Date Of Birth">
                <Input placeholder="date of birth" />
            </Form.Item>
            <Form.Item label="Nationality">
                <Input placeholder="nationality" />
            </Form.Item>
            <Form.Item>
                <Button>Save Customer</Button>
            </Form.Item>
            <Form.Item>
                <CancelButton>Cancel</CancelButton>  
            </Form.Item>
        </Form>
    )
}

export default NewCustomer

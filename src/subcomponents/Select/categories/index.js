import React from 'react'


import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}



const AntSelect =() => {
    return (
        <div style={{background:'#F6F6FB  ', borderRadius:8, fontFamily:'Sofia Pro',}}>
            <Select placeholder={'Categories'}  style={{ width: 110 }} bordered={false} onChange={handleChange}>
                <Option value="newitems">New Items</Option>
                <Option value="featured">Featured</Option>
                <Option value="popular">Popular</Option>
                
                
            </Select>
        </div>
    )
}

export default AntSelect

import React from 'react'


import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}



const AntSelect =({selectTitle,}) => {
    return (
        <div style={{background:'#F6F6FB  ', borderRadius:8, fontFamily:'Sofia Pro',}}>
            <Select placeholder={selectTitle}  style={{ width: 100 }} bordered={false} onChange={handleChange}>
                <Option value="active">Active</Option>
                <Option value="inactive">In Active</Option>
                <Option value="pending">Pending</Option>
                <Option value="suspended">Suspended</Option>
                
            </Select>
        </div>
    )
}

export default AntSelect

import React from 'react'


import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}



function index() {
    return (
        <div style={{background:'#E7E7F6 ', borderRadius:17, fontFamily:'Sofia Pro'}}>
            <Select defaultValue="week" style={{ width: 120}} bordered={false} onChange={handleChange}>
                <Option value="week">This week</Option>
                <Option value="month">This month</Option>
                <Option value="year">This year</Option>
            </Select>
        </div>
    )
}

export default index

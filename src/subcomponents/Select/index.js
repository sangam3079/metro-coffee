import React from 'react'
import Chart from '../Chart'

import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}


const handleChart = () => {
    <Chart />
   
} 
function index() {
    return (
        <div style={{background:'#E7E7F6 ', borderRadius:17, fontFamily:'Sofia Pro'}}>
            <Select defaultValue="week" style={{ width: 120}} bordered={false} onChange={handleChange}>
                <Option value="week" onClick={handleChart} >This week</Option>
                <Option value="month">This month</Option>
                <Option value="year">This year</Option>
            </Select>
        </div>
    )
}

export default index

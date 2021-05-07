import React from 'react'
import Select from '../Select'
import './styles.scss'
import Chart from '../Chart'

function index() {
    return (
        <div className='revenueCard'>
            <div className='revenueCard-header'>
                <text>Revenue</text>
                <Select />
            </div>
            <div className='revenueCard-chart'>
                <Chart />
            </div>
       
      </div>
    )
}

export default index

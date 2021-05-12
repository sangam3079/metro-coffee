import React from 'react'
import CustomerTable from'./CustomerTable'
import Header from '../../subcomponents/Header/Header'
import './styles.scss'


const Customer = () => {
    return (
        <div className='customerContainer'>
            <Header />
            <CustomerTable/>
        </div>
    )
}

export default Customer

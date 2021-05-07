import React from 'react'
import './styles.scss'
import orderIcon from '../../assets/Images/shopping-bag (1)/shopping-bag (1).png'
import customersIcon from '../../assets/Images/customer (1)/customer (1).png'
import productIcon from '../../assets/Images/Group 95/Group 95.png'
import categoriesIcon from '../../assets/Images/list/list.png'


function StoreStatistics() {
    return (
        <div className='storeStatistics'>
            <text>Store Statistics</text>
            <div className='statistics'>
                <div className='statistics-info'>
                    <p>statistics</p>
                    <text>3666</text>
                </div>
                <div className='statistics-image'>
                   <img src={orderIcon} alt='order icon' />
                </div>
                
            </div>
            <div className='statistics'>
                <div className='statistics-info'>
                    <p>Customers</p>
                    <text>6666</text>
                </div>
                <div className='statistics-image'>
                   <img src={customersIcon} alt='customersIcon' />
                </div>
                
            </div>
            <div className='statistics'>
                <div className='statistics-info'>
                    <p>Products</p>
                    <text>1000</text>
                </div>
                <div className='statistics-image'>
                   <img src={productIcon} alt='productIcon' />
                </div>  
            </div>
            <div className='statistics'>
                <div className='statistics-info'>
                    <p>Categoreis</p>
                    <text>50</text>
                </div>
                <div className='statistics-image'>
                   <img src={categoriesIcon} alt='categoriesIcon' />
                </div>
                
            </div>
        </div>
    )
}

export default StoreStatistics

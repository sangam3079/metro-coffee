import React from 'react'
import './styles.scss'
import TopProductDetail from './TopProductDetail'
import {TopProductsItems} from '../../RenderData/TopProductsItem'
import Select from '../Select'

function TopProducts() {
    return (
        <div className='topProducts'>
            <div className='topProducts-header'>
                <text>Top Products</text>
                <Select />
            </div>
            <div className='topProducts-list'>
                { TopProductsItems.map(item =>(
                    <TopProductDetail
                       key={item.index}
                       name={item.name}
                       price={item.price}
                       imgSrc={item.imgSrc}
                    />
                )) } 
            </div>
        </div>
    )
}

export default TopProducts

import React from 'react'
import './TopProductDetail.scss'

function TopProductDetail(props) {
    const { imgSrc, name, price } = props;
    return (
        <div className='topProductDetail'>
            <div className='topProductDetail-left'>
                <div className='topProductDetail-left-image'>
                    <img src={imgSrc} alt='productImg' />
                </div>
                <div className='topProductDetail-left-info'>
                    <text className='topProductDetail-left-info-name'>{name}</text>
                    <text className='topProductDetail-left-info-price'>$ {price}</text>
                </div>
            </div>
            <div className='topProductDetail-right'>
                <text className='topProductDetail-right-info-sold'>10 Sold</text>
                <text className='topProductDetail-right-info-price'>$300</text>
            </div>
        </div>
    )
}

export default TopProductDetail

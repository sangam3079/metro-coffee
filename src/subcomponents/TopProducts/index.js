import React from 'react'
import './styles.scss'
import TopProductDetail from './TopProductDetail'
import {TopProductsItems} from '../../RenderData/TopProductsItem'
import Select from 'react-select'


const customStyles = {
    
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 130,
      height:30,
      padding:0,
      display: 'flex',
      flexDirection: 'row'
      
    }),
    
}

function TopProducts() {


    var chartlist = [
        {
            value:1,
            label:'This week',
            
        },
        {
            value:2,
            label:'This month',
            
        },
        {
            value:3,
            label:'This year',
            
        },
    ]

    return (
        <div className='topProducts'>
            <div className='topProducts-header'>
                <text>Top Products</text>
                <div style={{background:'#E7E7F6 ', borderRadius:17, fontFamily:'Sofia Pro'}}>
                    <Select 
                       defaultValue={chartlist[0]}  
                       options={chartlist} 
                       //onChange={handler} 
                       styles={customStyles}
                       isSearchable={false}
                       theme={theme => ({
                       ...theme,
                        borderRadius: 10,
                        width:80,
                        colors: {
                          ...theme.colors,
                        //  primary25: 'priamry25',
                          primary: 'lightgray',
                        }, 
                      })} 
                    />
                </div>    
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

import React,{useState} from 'react'
import searchIcon from '../../assets/Images/searchicon/Group 29.png'
import StatusSelect from '../../subcomponents/Select/status'
import CategorySelect from '../../subcomponents/Select/categories'
import './styles.scss'
import AddIcon from '../../assets/Images/AddIcon/Icon feather-plus.png'

function Header({title, button,status,inputSearch, categories}) {

    
    return (
        <div>
            <div className='Header'>
                <text className='Header-title'>{title}</text>
                <div className='Header-content'>

                    {categories ?
                            <div className="Header-categories">
                                <CategorySelect selectTitle='category'/>
                            </div>
                        :null    
                    }

                    {inputSearch ?
                            <div className="Header-searchBar">
                                <img src={searchIcon} alt='searchIcon' />
                                <input className="Header-searchInput" type="text" placeholder="search by name"/>
                            </div>

                        : null
                    }

                    
                    {status 
                        ? 
                            <div className="Header-select">
                            <StatusSelect selectTitle='status' />
                            </div>

                        :    null

                    }
                     

                   {button? button : <> </>}

                </div>
            </div>
            
        </div>
    )
}

export default Header

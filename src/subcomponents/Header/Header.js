import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import NewCustomer from '../../components/Customers/NewCustomer'
import searchIcon from '../../assets/Images/searchicon/Group 29.png'
import Select from '../../subcomponents/Select'
import {Drawer} from 'antd'
import './styles.scss'
import AddIcon from '../../assets/Images/AddIcon/Icon feather-plus.png'

function Header() {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <div>
            <div className='Header'>
                <text className='Header-title'>Customers</text>
                <div className='Header-content'>
                    <div className="Header-searchBar">
                        <img src={searchIcon} alt='searchIcon' />
                        <input className="Header-searchInput" type="text" placeholder="search by name"/>
                    </div>
                    <div className="Header-select">
                       <Select />
                    </div>
                    
                    <button className='Header-button' onClick={showDrawer}>
                        <img src={AddIcon} alt='add icon'/>
                        <text>Add</text>
                    </button>

                </div>
            </div>
            <Drawer
                title="Add Customer"
                placement="right"
                closable={true}
                onClose={onClose}
                visible={visible}
                width={350}
            >  
              <NewCustomer/>
                  
            </Drawer>
        </div>
    )
}

export default Header

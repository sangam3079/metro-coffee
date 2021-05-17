import React, {useState} from 'react'
import './styles.scss'
import {Drawer} from 'antd'
import Header from '../../subcomponents/Header/Header'
import AddIcon from '../../assets/Images/AddIcon/Icon feather-plus.png'
import NewOrder from './NewOrder'
import OrdersTable from './OrdersTable'


function Orders() {
    
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <div className='ordersContainer'>
            <Header
               title='Orders' 
               inputSearch={true}
               status={true}
               button={
                    <button className='Header-button' onClick={showDrawer}>
                       <img src={AddIcon} alt='add icon'/>
                       <text>Add</text>
                    </button>
               }
            />

            <OrdersTable />


            <Drawer
                title="Add Order"
                placement="right"
                closable={true}
                onClose={onClose}
                visible={visible}
                width={350}
            >  
                <NewOrder /> 
            </Drawer>
            
        </div>
    )
}

export default Orders

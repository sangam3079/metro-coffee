import React,{useState} from 'react'
import CustomerTable from'./CustomerTable'
import Header from '../../subcomponents/Header/Header'
import './styles.scss'
import {Drawer} from 'antd'
import NewCustomer from '../../components/Customers/NewCustomer'
import AddIcon from '../../assets/Images/AddIcon/Icon feather-plus.png'
import Select from '../../subcomponents/Select/status'




const Customer = () => {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <div className='customerContainer'>
            <Header 
                title='Customer' 
                inputSearch={true}
                status={true}
                button={
                    <button className='Header-button' onClick={showDrawer} >
                    <img src={AddIcon} alt='add icon'/>
                    <text>Add</text>
                    </button>
                }
            />
            <CustomerTable/>
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

export default Customer

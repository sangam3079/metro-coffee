import React,{useState} from 'react'
import './styles.scss'
import Header from '../../subcomponents/Header/Header'
import {Drawer} from 'antd'
import NewCustomer from '../../components/Customers/NewCustomer'
import AddIcon from '../../assets/Images/AddIcon/Icon feather-plus.png'
import ProductsTable from './ProductsTable'
import NewProducts from './NewProducts'

function Products() {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <div className='productsContainer'>
            <Header 
                title='Products'
                categories={true}
                inputSearch={true}
                status={true}
                button={
                    <button className='Header-button' onClick={showDrawer} >
                    <img src={AddIcon} alt='add icon'/>
                    <text>Add</text>
                    </button>
                }
            />
            <ProductsTable />

            <Drawer
                title="Add Product"
                placement="right"
                closable={true}
                onClose={onClose}
                visible={visible}
                width={350}
            >  
                <NewProducts /> 
            </Drawer>
        </div>
    )
}

export default Products

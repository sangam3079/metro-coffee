import React from 'react'
import { Menu } from 'antd';
import {Link } from 'react-router-dom'
import './styles.scss'
import logo from '../../assets/Images/logo/logo.png'
import menuIcon from '../../assets/Images/Icon open-menu/Icon open-menu.png'
import dashboardIcon from '../../assets/Images/Icon material-dashboard/Icon material-dashboard.png'
import {
  DashboardOutlined,
  SmileOutlined,
  CustomerServiceOutlined,
  UserOutlined,
  CoffeeOutlined ,
  ShopOutlined 

} from '@ant-design/icons';



function index() {
    return (
        <Menu
            style={{ width: 200 , fontFamily:'Sofia Pro'}}
            
        >   <Menu.Item className='menuLogo'>
                <img 
                   className='logo-img'
                   src={logo} 
                   alt='logo' 
                />
                <img 
                   className='menuIcon'
                   src={menuIcon} 
                   alt='menuIcon' 
                />
            </Menu.Item>
                <Menu.Item key="1" icon={<DashboardOutlined />} >
                    <Link to ='/home/dashboard'>
                       
                       Dashboard
                    </Link>
                </Menu.Item>
            
            <Menu.Item key="2" icon={<UserOutlined />}>
                <Link to ='/home/customers'>
                  Customers
                </Link>
               
            </Menu.Item>
            <Menu.Item key="3" icon={<CoffeeOutlined />}>
               Product
            </Menu.Item>
            <Menu.Item key="4" icon={<ShopOutlined />}>
               Order
            </Menu.Item>
            
            
            
        </Menu>
    )
}

export default index

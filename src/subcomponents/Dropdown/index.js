import React from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import IconDropdown from '../../assets/Images/Icon dropdown/Icon dropdown.png'

const menu = (
  <Menu>
    <Menu.Item key="1">
      <a>Settings</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">Log Out</Menu.Item>
  </Menu>
);
function index() {
    return (
        <div>
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                 <img src={IconDropdown} alt='IconDropdown'/>
                </a>
            </Dropdown>
        </div>
    )
}

export default index

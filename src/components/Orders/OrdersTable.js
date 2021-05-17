import React from 'react'
import {Link} from 'react-router-dom'
import './styles.scss'
import { Menu, Dropdown, Table} from 'antd';
import {EllipsisOutlined, EyeOutlined, EditOutlined , DeleteOutlined} from '@ant-design/icons'
import customerImg from '../../assets/Images/cutomerimg/pexels-chevanon-photography-312418.png'


const menu = (
  <Menu>
    <Menu.Item key="1">
      <Link to='products'>
        <EyeOutlined />
        View 
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      <EditOutlined />
      Edit
    </Menu.Item>
    <Menu.Item key="2">
      <DeleteOutlined />
      Remove
    </Menu.Item>
  </Menu>
);

const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    
    return obj;
  };

const columns = [
    {
    title: 'Order',
    dataIndex: 'order',
   
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
  },
  {
    title: 'Purchased',
    dataIndex: 'purchased',
  },
  {
    title: 'Total',
    dataIndex: 'total',
  },
  
  {
      title:'Option',
      dataIndex : 'active',
      render : () => {
        return(  
          <div>
              <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                 <EllipsisOutlined />
                </a>
            </Dropdown>
          </div>
        )  
      }
  }
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    order: `#99001 ${i}`,
    date:'jul 4 2020',
    status:'pending',
    customer:'Chris Bonks',
    purchased:'3 items',
    total:'$ 9'
    
  });
}

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  }

function OrdersTable() {
    return (
        <div className="ordersCard">
            <Table  
                className="ordersTable"
                rowSelection={rowSelection} 
                columns={columns} 
                dataSource={data} 
                bordered={false}
                
            />
        </div>
    )
}

export default OrdersTable
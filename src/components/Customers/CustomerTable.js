import React from 'react'
import {Link} from 'react-router-dom'
import './styles.scss'
import { Menu, Dropdown, Table} from 'antd';
import {EllipsisOutlined, EyeOutlined, MailOutlined} from '@ant-design/icons'
import customerImg from '../../assets/Images/cutomerimg/pexels-chevanon-photography-312418.png'


const menu = (
  <Menu>
    <Menu.Item key="1">
      <Link to='customers/detail'>
        <EyeOutlined />
        View Details
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      <MailOutlined />
      Send Message
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
        title: 'User',
        dataIndex: 'image',
        key: 'image',
        colSpan: 2,
        render: (url, row) => {
        return (
            <img
            src={customerImg}
            alt={row.name}
            //className='image-table'
            //loading='lazy'
            width='30px'
            height='30px'
            />
        );
        },
    },
    {
    title: 'name',
    dataIndex: 'name',
    colSpan: 0,
    render: renderContent,
  },
  {
    title: 'Ordered',
    dataIndex: 'ordered',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
  {
    title: 'Country',
    dataIndex: 'country',
  },
  {
    title: 'Last Ordered',
    dataIndex: 'date',
  },
  {
    title: 'Status',
    dataIndex: 'status',
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
    name: `Edward King ${i}`,
    email:'abc@gmail.com',
    ordered:'450 pounds',
    phone: `+911 0000000 ${i}`,
    country:'united kingdom',
    date:'10 fevb 2020',
    status:'Active',
    
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

function CustomerTable() {
    return (
        <div className="customerCard">
            <Table  
                className="customerTable"
                rowSelection={rowSelection} 
                columns={columns} 
                dataSource={data} 
                bordered={false}
                
            />
        </div>
    )
}

export default CustomerTable

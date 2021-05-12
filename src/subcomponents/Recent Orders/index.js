import React from 'react'
import './styles.scss'
import {Table} from 'antd'
import img from '../../assets/Images/pexels-chevanon-photography-312418/pexels-chevanon-photography-312418.png'


const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  
  return obj;
};

const dataSource = [
    {
      key: '1',
      image: {img},
      name: 'Cold Americano',
      customer:'sangam',
      order_no : 123,
      date:'6/5/2021',
      amount:2020,
      status:'Delivered'
    },
    {
      key: '2',
      image: {img},
      customer:'kevin',
      name: 'Cold Americano',
      order_no : 1234,
      date:'6/5/2021',
      amount:200,
      status:'cancelled'
  },
  {
    key: '3',
    image: {img},
    customer:'kevin',
    name: 'Cold Americano',
    order_no : 1234,
    date:'6/5/2021',
    amount:200,
    status:'cancelled'
},
      
     
];
  
const columns = [
    {
      title: 'Product Name',
      dataIndex: 'image',
      key: 'image',
      colSpan:2,
      render: (url, row) => {
        return (
            <img
            src={img}
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      colSpan:0,
      
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Order no',
      dataIndex: 'order_no',
      key: 'order_no',
    
    },
    {
      title: 'Date',
      dataIndex:'date',
      key:'date'
    },
    {
      title:'Amount',
      dataIndex:'amount',
      key:'amount'
     },
    {
      title:'status',
      dataIndex:'status',
      key:'status'
    }
    
  ];

function RecentOrders() {
    return (
        <div className='recentOrders'>
            <text>Recent Orders</text>
            <Table 
              className='recentOrders-table'
              dataSource={dataSource} 
              columns={columns} 
              pagination={false}  
              tableLayout='undefined' 
            />
        </div>
    )
}

export default RecentOrders

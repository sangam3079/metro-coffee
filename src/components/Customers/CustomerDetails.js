import React from 'react'
import './CustomerDetail.scss';
import {Link} from 'react-router-dom'
import {Col, Card, Tabs, Divider} from 'antd'
import {UserOutlined, BellOutlined, ShoppingOutlined, LeftOutlined} from '@ant-design/icons'
import backIcon from '../../assets/Images/backIcon/backIcon.png'
import personIcon from '../../assets/Images/Icon material-person-outline/Icon material-person-outline.png'
import detailprofile from '../../assets/Images/detailprofile/detailprofile.png'
import emailImg from '../../assets/Images/email (1)/email (1).png'
import bookmarkImg from '../../assets/Images/Icon feather-bookmark/Icon feather-bookmark.png'
import suspendedImg from '../../assets/Images/suspended/suspended.png'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function CustomerDetails() {
    return (
        <div className="customerDetail">
            <div className="customerDetail-header">
                <text>Customers Info</text>
                <Link to='/home/customers'>
                   <img src={backIcon} alt='Back icon' />
                    Back
                </Link>
            </div>
            <div className="customerDetail-main">
                <Col span={15}>
                    <Card className='customerDetail-main-infocard'>
                      <Tabs defaultActiveKey="1" onChange={callback}>
                          <TabPane 
                            tab={
                                <span>
                                <UserOutlined />
                                Personal
                                </span>
                            }
                            key="1"
                          >
                            <div className="customerDetail-main-infocard-content">
                                <div className="customerDetail-main-infocard-content-heading">
                                   Personal Information
                                </div>
                                <div className="customerDetail-main-infocard-content-Info">
                                    <div className="customerDetail-main-infocard-content-Info-left">    
                                        <div className="customerDetail-main-infocard-content-Info-left-data">
                                          <text>Title :</text>
                                          <p>Mr</p>
                                        </div>
                                        <div className="customerDetail-main-infocard-content-Info-left-data">
                                          <text>Date Of Birth :</text>
                                          <p>10 sep 1998</p>
                                        </div>
                                        <div className="customerDetail-main-infocard-content-Info-left-data">
                                          <text>Mobile No :</text>
                                          <p>N/A</p>
                                        </div>
                                    </div>
                                    <div className="customerDetail-main-infocard-content-Info-right">
                                        <div className="customerDetail-main-infocard-content-Info-right-data">
                                          <text>FullName :</text>
                                          <p>Chris Bonks</p>
                                        </div>
                                        <div className="customerDetail-main-infocard-content-Info-right-data">
                                          <text>SurName :</text>
                                          <p>Io</p>
                                        </div>
                                        <div className="customerDetail-main-infocard-content-Info-right-data">
                                          <text>Email :</text>
                                          <p>random123@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="customerDetail-main-infocard-content-heading">
                                   Additional Inforamtion
                                </div>
                                <div className="customerDetail-main-infocard-content-Info">
                                    <div className="customerDetail-main-infocard-content-Info-left">
                                        <div className="customerDetail-main-infocard-content-Info-left-data">
                                          <text>Joining Date :</text>
                                          <p>10 sep 2020</p>
                                        </div>
                                        <div className="customerDetail-main-infocard-content-Info-left-data">
                                          <text>Country :</text>
                                          <p>United Kingdom</p>
                                        </div>
                                    </div>
                                    <div className="customerDetail-main-infocard-content-Info-right">
                                        <div className="customerDetail-main-infocard-content-Info-right-data">
                                          <text>Reg Method :</text>
                                          <p>Email</p>
                                        </div>
                                        <div className="customerDetail-main-infocard-content-Info-right-data">
                                          <text>Nationality :</text>
                                          <p>British</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </TabPane>
                        
                          <TabPane 
                              tab={
                                  <span>
                                  <ShoppingOutlined />
                                  Orders
                                  </span>
                              }
                              key="2"
                          >
                          orders
                          </TabPane>

                          <TabPane 
                              tab={
                                  <span>
                                  <BellOutlined />
                                  Notifications
                                  </span>
                              }
                              key="3"
                          >
                          Content of notification
                         </TabPane>
                      </Tabs>
                    </Card>
                </Col>
                <Col span={8}>
                  <Card className='customerDetail-main-profilecard'>
                    <div className="customerDetail-main-profilecard-info">
                      <img src={detailprofile} alt='detail profile pic' />
                      <div className='customerDetail-main-profilecard-info-customerTag'><text>customer</text></div>
                      <div className='customerDetail-main-profilecard-info-nameEmail'>
                          <text>chris Bonks</text>
                          <p>hjkaula@gmail.com</p>
                      </div>
                    </div> 
                    <div className='customerDetail-main-profilecard-action'>
                       <img src={emailImg} alt='emailImg' />
                       <img src={bookmarkImg} alt='bookmarkImg' />
                       <img src={suspendedImg} alt='suspendedImg' />
                    </div>
                    <div className='customerDetail-main-profilecard-stats'>
                      <div className='customerDetail-main-profilecard-stats-content'>
                        <p>50</p>
                        <text>Orders</text>
                      </div>
                      <div className='customerDetail-main-profilecard-stats-content'>
                        <p>50</p>
                        <text>Complete</text>
                      </div>
                      <div className='customerDetail-main-profilecard-stats-content'>
                        <p>50</p>
                        <text>Process</text>
                      </div>
                    </div>
                    <div className='customerDetail-main-profilecard-userDetail'>
                      <div className='customerDetail-main-profilecard-userDetail-left'>
                        <div className='customerDetail-main-profilecard-userDetail-content'>
                          <text>User Id :</text>
                          <p>UGDBG003</p>
                        </div>
                        <div className='customerDetail-main-profilecard-userDetail-content'>
                          <text>Email :</text>
                          <p>verified</p>
                        </div>
                      </div>
                      <div className='customerDetail-main-profilecard-userDetail-right'>
                        <div className='customerDetail-main-profilecard-userDetail-content'>
                          <text>Last Login : </text>
                          <p>13Jun,2020 01:30PM</p>
                        </div>
                        <div className='customerDetail-main-profilecard-userDetail-content'>
                          <text>Register At :</text>
                          <p>Nov 19, 2019</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
            </div>
        </div>
    )
}

export default CustomerDetails

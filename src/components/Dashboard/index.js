import React from 'react' 
import {Card, Row, Col, Divider} from 'antd'
import './styles.scss'
import RevenueCard from '../../subcomponents/Revenue Card'
import TopProducts from '../../subcomponents/TopProducts'
import StoreStatistics from '../../subcomponents/Store Statistics'
import RecentOrders from '../../subcomponents/Recent Orders'
import positiveGraph from '../../assets/Images/Path 44/Path 44.png'
import negativeGraph from '../../assets/Images/Path 44 (1)/Path 44.png'
import arrowUp from '../../assets/Images/Icon feather-arrow-down/Icon feather-arrow-down.png'
import arrowDown from '../../assets/Images/Icon feather-arrow-down (1)/Icon feather-arrow-down.png'


function index() {
  return (
    <div className='dashboard'>
      <div className='dashboard-heading'>Dashboard</div>
      
      <Row gutter={[40,40]}>
        <Col  span={6}>
          <Card className='infocard' >
            <div className='miniCard'>
              <div className='miniCard-info'>
                <text className='miniCard-info-title'>TODAY REVENUE</text>
                <text className='miniCard-info-number'>$ 7666</text>
              </div>
              <div className='miniCard-graph'>
                <img className='miniCard-graph-chart' src={positiveGraph} alt='postiveGraph' />
                <div className='miniCard-graph-detail'>
                  <text className='miniCard-graph-detail-info'>+15%</text>
                  <img className='miniCard-graph-detail-arrow' src={arrowUp} alt='up arrow' />
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className='infocard'>
            <div className='miniCard'>
              <div className='miniCard-info'>
                <text className='miniCard-info-title'>TODAY ORDER</text>
                <text className='miniCard-info-number'>$ 50</text>
              </div>
              <div className='miniCard-graph'>
                <img className='miniCard-graph-chart' src={negativeGraph} alt='negativeGraph' />
                <div className='miniCard-graph-detail'>
                  <text className='miniCard-graph-detail-info-neg'>-10 %</text>
                  <img className='miniCard-graph-detail-arrow' src={arrowDown} alt='down arrow' />
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className='infocard'>
            <div className='miniCard'>
              <div className='miniCard-info'>
                <text className='miniCard-info-title'>PRODUCT SOLD</text>
                <text className='miniCard-info-number'> 266</text>
              </div>
              <div className='miniCard-graph'>
                <img className='miniCard-graph-chart' src={positiveGraph} alt='postiveGraph' />
                <div className='miniCard-graph-detail'>
                  <text className='miniCard-graph-detail-info'>+30%</text>
                  <img className='miniCard-graph-detail-arrow' src={arrowUp} alt='up arrow' />
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className='infocard'>
            <div className='miniCard'>
              <div className='miniCard-info'>
                <text className='miniCard-info-title'>TODAY CUSTOMERS</text>
                <text className='miniCard-info-number'>30</text>
              </div>
              <div className='miniCard-graph'>
                <img className='miniCard-graph-chart' src={positiveGraph} alt='postiveGraph' />
                <div className='miniCard-graph-detail'>
                  <text className='miniCard-graph-detail-info'>+15%</text>
                  <img className='miniCard-graph-detail-arrow' src={arrowUp} alt='up arrow' />
                </div>
              </div>
            </div>
          </Card>
        </Col>

        {/*--------2nd row---------*/}
        <Col span={15}>
         <Card className='infocard'>
           <RevenueCard  />
         </Card>
        </Col>
        <Col span={9}>
         <Card className='infocard'>
           <TopProducts />
         </Card>
        </Col>

        {/*-------3rd row----------*/ }
        <Col span={15}>
         <Card className='infocard'>
           <RecentOrders />
         </Card>
        </Col>
        <Col span={9}>
         <Card className='infocard'>
           <StoreStatistics />
         </Card>
        </Col>
      </Row>
     
    </div>
  )
}

export default index

import React, {useState} from 'react'
//import Select from '../Select'
import Select from 'react-select'
import './styles.scss'
import YearlyChart from '../Chart/YearlyChart'
import WeeklyChart from '../Chart/WeeklyChart'
import MonthlyChart from '../Chart/MonthlyChart'


const customStyles = {
    
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 130,
      height:30,
      padding:0,
      display: 'flex',
      flexDirection: 'row'
      
    }),
    
  }



const RevenueCard =() => {

    var chartlist = [
        {
            value:1,
            label:'This week',
            chart:<WeeklyChart/>
        },
        {
            value:2,
            label:'This month',
            chart: <MonthlyChart />
        },
        {
            value:3,
            label:'This year',
            chart: <YearlyChart />
        },
    ]

    
    const [clicked, setClicked] =useState(true)
    const [result, chartValue] = useState(chartlist.chart);

    const handler = e => {
        setClicked(false)
        chartValue(e.chart);
    
        
    }

   
   
    return (
        <div className='revenueCard'>
            <div className='revenueCard-header'>
                <text>Revenue</text>
                <div style={{background:'#E7E7F6 ', borderRadius:17, fontFamily:'Sofia Pro'}}>
                    <Select 
                       defaultValue={chartlist[0]}  
                       options={chartlist} 
                       onChange={handler} 
                       styles={customStyles}
                       isSearchable={false}
                       theme={theme => ({
                       ...theme,
                        borderRadius: 10,
                        width:80,
                        colors: {
                          ...theme.colors,
                        //  primary25: 'priamry25',
                          primary: 'lightgray',
                        }, 
                      })} 
                    />
                </div>
                
            </div>
            <div className='revenueCard-chart'>
              { 
                clicked ?  <WeeklyChart /> : ''
              }
              {result}
                
            </div>
       
      </div>
    )
}

export default RevenueCard

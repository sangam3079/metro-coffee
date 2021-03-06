import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Menu from '../Menu'
import NavBar from '../NavBar'
import Dashboard from '../Dashboard'
import Customers from '../Customers'
import CustomerDetails from '../Customers/CustomerDetails'
import Products from '../Products'
import Orders from '../Orders'
import './styles.scss'



function index() {
    
    return (
        <div  className='homePage'>
            <div className="sidebar">
               <Menu />
            </div>
            
            <div className='header'>
                <NavBar />
            </div>
            <div className='main'>
                <Switch>
                    <Route
                        exact
                        path="/home/orders"
                        render={() => (
                            <Orders/>

                        )}
                    />
                    <Route
                        exact
                        path="/home/products"
                        render={() => (
                            <Products/>

                        )}
                    />
                    <Route
                        exact
                        path="/home/customers/detail"
                        render={() => (
                            <CustomerDetails/>

                        )}
                    />
                    <Route
                        exact
                        path="/home/customers"
                        render={() => (
                            <Customers/>

                        )}
                    />
                    <Route
                        exact
                        path="/home/dashboard"
                        render={() => (
                            <Dashboard/>

                        )}
                    />
                    
                </Switch>
            </div>
            
            
            
            
            
        </div>
    )
}

export default index

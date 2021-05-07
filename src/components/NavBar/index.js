import React from 'react'
import {Link} from 'react-router-dom'
import './navbarstyles.scss'
import Dropdown from '../../subcomponents/Dropdown'
import searchIcon from '../../assets/Images/searchicon/Group 29.png'
import bellIcon from '../../assets/Images/bell (1)/bell (1).png'
import profilePic from '../../assets/Images/Ellipse 18/Ellipse 18.png'

function index() {
    return (
        <div className="NavBar">
            <div className='navContainer'>
                <div className="searchBar">
                    <img src={searchIcon} alt='searchIcon' />
                    <input className="searchInput" type="text" placeholder="Search  here"/>
                </div>
                <div className="actionItems">
                    <img className="actionItems-notification" src={bellIcon} alt='bellIcon' />
                    <div className="actionItems-profile" >
                        <div className="actionItems-profile-profilePic">
                            {/* <img src={profilePic} alt="profilePic"></img> */}
                        </div>  
                        <div className="actionItems-profile-details">
                            <text>Admin</text>
                            <div className='actionItems-profile-details-name'>
                                <text>sangam poudel</text>
                                <Dropdown />
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default index

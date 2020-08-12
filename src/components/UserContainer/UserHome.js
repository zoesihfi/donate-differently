import React, { Component } from 'react';
import avatar_img from '../Images/avatar_img.png';
import { Link } from 'react-router-dom';

export default class UserHome extends Component{
    render() {
        return(

            <div className="user-home">

                <div className="user-container">

                    <img src={avatar_img} alt="logo" />
                    
                    <hr/>

                    <h5>My Profile</h5>

                    <hr/>

                    <h5>My Donations</h5>

                    <hr/>

                    <h5>Payment</h5>

                    <hr/>

                    <h5>Settings</h5>

                    <br/>
                    <br/>
                    <Link to="/user/sample" id="user-home-link"><button>Create A Donation</button></Link>

                </div>

            </div>

        );
    }
}
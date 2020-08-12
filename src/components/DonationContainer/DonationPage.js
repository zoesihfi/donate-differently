import React, { Component } from 'react';
import nkhlogo from '../../assets/nkhlogo.png';

export default class DonationPage extends Component {
    render() {
        return (
            <div className="donation-home">
               
                <div className="donation-title">
                    <h2>My Donations</h2>
                </div>

                <div className="donationlists">
                    <div className = "nkh">
                        <p className="donation-name">No kid hungry</p>
                        <br></br>
                        { /*<p className="charity-image">[IMAGE OF CHARITY HERE]</p> */}
                        <div>   
                            <img src={nkhlogo} alt = "logo" className = "charity-logo" ></img>
                        </div>
                        
                        <div className = "outside-progress">
                            <div className = "donation-progress" id ="nkd-progress"></div>
                        </div>

                        <div className="charity-dropdown">
                            <p className="nkd-amount-donated">$48 Donated</p>
                            <p className="nkd-dropdown-dots">●●●</p>
                        </div>

                    </div>

                    <div className="rmd">
                        <p className="donation-name">Ronald McDonald</p>
                    </div>
                </div>
            </div>
        );
    }
}
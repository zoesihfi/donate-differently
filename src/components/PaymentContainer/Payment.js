import React, { Component } from "react"; 
import ReactDOM from "react-dom";
//import components 
import Checkout from './stripe-checkout';

//import logo
import logo from '../../assets/donate-differently-logo.png';

//import icons / material ui
import { Tooltip } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';  
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//import bootstrap
import Row from 'react-bootstrap/Row';


export default class Payment extends Component {
    render() {
        return(
            <div className='payment'>

                <div className= 'row-1'>
                    <div className= 'col-1'><ArrowBackIcon/></div>
                    <div className= 'col-1'><h1> Payment </h1></div>
                </div> 
               
                
                    <div className='border-wrap' >
                        <div className='payment-card'>
                            <div className='row-2'>
                                <div className='col-2' id='logo'><img src={logo}  className='logo' alt="logo"/></div>
                            </div>
                            <div className= 'row'>
                                <Checkout/>
                            </div>
                        </div>
                    </div>
                
                <hr/>
                <div className='row-3'> 
                 <div className= 'col-3'><h3>Card ending in **3751</h3></div>  
                 <div className= 'col-3'><MoreHorizIcon/></div>
                </div>
               
            </div>
        );
    }
}
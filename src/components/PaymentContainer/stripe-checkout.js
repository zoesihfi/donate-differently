import React, { Component } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom"; 

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51HEhVVInzxYeJTOd20s2KGRTyFac8aiDJuhC5mdI09RglII6IuzmoYx4LxCe7MrVoKoSFjq03bU64sEOi3BTe6Ib00Fh0IWTq3');

class Checkout extends Component {

    render() {
    return (
        <div>
             <Elements stripe={stripePromise}>
                <CheckoutForm/>
            </Elements>
        </div>
    );
    }
}
export default Checkout;
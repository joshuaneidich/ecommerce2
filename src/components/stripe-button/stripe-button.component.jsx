import React from 'react';
import StripeCheeckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_kUyige9wCY0ZSV4gXFeHuMsP';

    //testing server

    const onToken = token => {
        axios({
            url: 'http://localhost:5000/payment', //! This is for dev only. Switch to heroku server url
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(res => {
            console.log(res)
            alert("Payment Successful!");
        }).catch(err => {
            console.error(err);
            alert("Payment Failed!");
        })
    }

    return (
        <StripeCheeckout
            label='Pay Now'
            name='CRN Clothing LTD.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
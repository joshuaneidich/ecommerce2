import React from 'react';
import StripeCheeckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_kUyige9wCY0ZSV4gXFeHuMsP';

    const onToken = token => {
        console.log(token)
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
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export const StripeCheckoutButton = ({price}) => {

const priceForStripe = price * 100;
const publishableKey = 'pk_test_51HATPWEOHXDt0uoYfMv9omhsM8Ckw4vS6J8GtvwUdgeWI6odX1dFPBMxapvmygPqq5NGtZT5H7LF4yrCkvEi9Agi005ywlJp3G';

const onToken = token => {
    console.log(token);
    alert('Payment Successfull');
}

return (
        <StripeCheckout 
            label='Pay now' 
            name='Cractus Clothing ltd'
            billingAddress
            shippingAddress
            description={`Your Total is $${price}`}
            amount={priceForStripe} 
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
            />
    )
}

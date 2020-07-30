import React from 'react'

import {connect} from 'react-redux'
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import {StripeCheckoutButton} from '../../components/stripe-checkout-button/stripe-button.component'

import './checkout.styles.scss'

const CheckoutPage = ({cartItems,total}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='checkout-block'>
                    <span>Product</span>
                </div>
                <div className='checkout-block'>
                    <span>Description</span>
                </div>
                <div className='checkout-block'>
                    <span>Quantity</span>
                </div>
                <div className='checkout-block'>
                    <span>Price</span>
                </div>
                <div className='checkout-block'>
                    <span>Remove</span>
                </div>
            </div>    
            
           
                    {
                        cartItems.map(cartItem =>  (  <CheckoutItem key={cartItem.id} cartItem={cartItem} /> ) )
                    }
                
                <div className='total'>
                    <span>Total : ${total}</span>
                </div>
                <div className='test-warning'>
                    *Please use the following credit card number for payments*
                    <br />
                    4242 4242 4242 4242 - CVC:Any 3 digits - EXP: Any Future Date
                </div>
                <StripeCheckoutButton price={total} />
            
        </div>
    )
}

const matchStateToProps = () => createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
}
)

export default connect(matchStateToProps)(CheckoutPage)

import React from 'react'
import {connect} from 'react-redux'
import {CustomButton} from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import { CartItem } from '../cart-item/cart-item.component'


const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => 
                        <CartItem id={cartItem.id} item={cartItem} />)
                } 
            </div>
            <CustomButton>CHECKOUT</CustomButton>
        </div>
    )
}

const matchStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(matchStateToProps)(CartDropdown)
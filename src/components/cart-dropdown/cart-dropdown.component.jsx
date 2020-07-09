import React from 'react'
import {connect} from 'react-redux'
import {CustomButton} from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import { CartItem } from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'


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

const matchStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(matchStateToProps)(CartDropdown)

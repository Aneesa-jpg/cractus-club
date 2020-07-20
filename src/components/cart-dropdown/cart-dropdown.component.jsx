import React from 'react'
import {connect} from 'react-redux'
import {CustomButton} from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import { CartItem } from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import {withRouter} from 'react-router-dom'


const CartDropdown = ({cartItems, history,dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                    cartItems.map(cartItem => 
                        <CartItem key={cartItem.id} id={cartItem.id} item={cartItem} />) :
                        <span className='empty'>Currently the cart is empty </span>
                } 
            </div>
            <CustomButton onClick = {() => {history.push('/checkout'); 
                                            dispatch(toggleCartHidden())} //to hide the cartDropdown
                                            }>CHECKOUT</CustomButton>
        </div>
    )
}

const matchStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

//withRouter passes history and match 

// when we don't use a second parameter to connect, it sends dispatch into the component as property 

export default withRouter(connect(matchStateToProps)(CartDropdown))

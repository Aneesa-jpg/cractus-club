import React from 'react'
import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'

import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden,itemCount}) => {
    
    console.log({toggleCartHidden});
    
    return (
        <div className='cart-icon' onClick = {toggleCartHidden}>
        
           <ShoppingCart className='shopping-icon' /> 
           <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const matchStateToProps = createStructuredSelector({
    itemCount : selectCartItemsCount
}
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})
export default connect(matchStateToProps,mapDispatchToProps)(CartIcon)

import React from 'react'
import {connect} from 'react-redux'

import { ReactComponent as Logo } from '../../assets/plant.svg'
import { Link } from 'react-router-dom'
import {createStructuredSelector} from 'reselect'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import {auth} from '../../firebase/firebase.utils'


import './header.styles.scss'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'


const Header = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            
                <Link to='/'> <Logo /></Link>
                <div className='options'>
                    <Link className='option' to='/shop'>SHOP</Link>
                    <Link className='option' to='/contact'>CONTACT</Link>
                    {
                        currentUser ?
                            <div className='option' onClick = {() => auth.signOut()}>SIGN OUT</div> :
                            <Link className='option' to='/signin'>SIGN IN</Link>
                    }
                    <CartIcon />
                </div>
                {
                    hidden ? null : <CartDropdown />
                }
                
        </div>
    )
}


const mapStateToProps = (state) => createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
  });
  
  export default connect(mapStateToProps)(Header);
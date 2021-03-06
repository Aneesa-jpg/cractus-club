import React from 'react';
import './sign-in.styles.scss';

import {FormInput} from '../form-input/form-input.component'
import { CustomButton } from '../custom-button/custom-button.component';

import {auth, signInWithPopup} from '../../firebase/firebase.utils'

class SignIn extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }

    }

    handleSubmit = async event => {
            event.preventDefault();

            const {email, password} = this.state;
    
            
            
            try {
                 await auth.signInWithEmailAndPassword(email,password); 
                 this.setState({
                    email : '',
                    password : ''
                })  
            } catch (error) {
                console.log("error message is",error);
                
            }
            
    }

    handleChange = event => {
        const {name,value} = event.target;
        console.log(event.target);
        
        this.setState({
            [name] : value
        })
    }

  render(){
      return (
          <div className='sign-in'>
              <h2>I already have an account</h2>
              <span>Sign in with your email and password</span>
              <form onSubmit={this.handleSubmit}>
                  <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label= 'E-mail'
                    required />
                
                  
                  <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label= 'Password'
                    required />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='submit' onClick ={signInWithPopup} isGoogleSignIn >Google SignIn</CustomButton>
                </div>
                  
              </form>
          </div>
      )
  }

}

export default SignIn;
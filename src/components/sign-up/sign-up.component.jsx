import React from 'react';
import CustomButton from '../custom-button.component/custom-button.component';
import FormInput from '../form-input/form-input.component';


import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        //ONsIGNuP IS FROM HOMEPAGE TO UPDATE THE STATE, YOU CAN EITHER JOIN YOUR BACKEND HERE(RECOMMENDED) OR AT THE HOMEPAGE FOR SIGN UP
        this.props.onSignUp(this.state);
        
        this.setState({displayName: '',
        email: '',
        password: '',
        confirmPassword: ''})


    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }


    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className = 'sign-up'>
                <form className = 'sign-up-form' onSubmit = {this.handleSubmit} >
                    <FormInput
                        type = 'text'
                        name = 'displayName'
                        value = {displayName}
                        onChange = {this.handleChange}
                        label = 'Display Name'
                        required
                    />
                     <FormInput
                        type = 'email'
                        name = 'email'
                        value = {email}
                        onChange = {this.handleChange}
                        label = 'Email'
                        required
                    />
                    <FormInput
                        type = 'password'
                        name = 'password'
                        value = {password}
                        onChange = {this.handleChange}
                        label = 'Password'
                        required
                    />
                     
                    
                    <FormInput
                        type = 'password'
                        name = 'confirmPassword'
                        value = {confirmPassword}
                        onChange = {this.handleChange}
                        label = 'Confirm Password'
                        required
                    />
                   
                   
                    <div className = 'buttons'>
                        <CustomButton type = 'submit'> SIGN UP </CustomButton>
                    </div>
                        

                </form>
            </div>
        )
    }

}

export default SignUp;
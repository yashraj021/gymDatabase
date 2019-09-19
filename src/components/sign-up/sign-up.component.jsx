import React from 'react';
import CustomButton from '../custom-button.component/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {Form} from 'react-bootstrap';


import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            Type: ''
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        //ONsIGNuP IS FROM HOMEPAGE TO UPDATE THE STATE, YOU CAN EITHER JOIN YOUR BACKEND HERE(RECOMMENDED) OR AT THE HOMEPAGE FOR SIGN UP
        this.props.onSignUp(this.state);
        
        this.setState({displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        Type: ''
    })


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
                   <Form.Check
                        style = {{color: 'white'}}
                        type="radio"
                        label="MEMBER"
                        name="Type"
                        value = 'MEMBER'
                        id="formHorizontalRadios1"
                        onChange = {this.handleChange}
                        />
                        <Form.Check
                        style = {{color: 'white'}}
                        type="radio"
                        label="TRAINER"
                        name="Type"
                        id="formHorizontalRadios2"
                        onChange = {this.handleChange}
                        />
                        <Form.Check
                        style = {{color: 'white'}}
                        type="radio"
                        label="ADMIN"
                        name="Type"
                        id="formHorizontalRadios3"
                        onChange = {this.handleChange}
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
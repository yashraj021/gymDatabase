import React, {Component} from 'react';
import CustomButton from '../custom-button.component/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {Form} from 'react-bootstrap';
import {addUser} from '../../API/firebase.dml';

import './sign-up.styles.scss';

class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        address: '',
        phoneno: '',
        Type: ''
    };

    handleSubmit = async event => {
        event.preventDefault();
        await addUser(this.state);
        this.setState({
            displayName: '',
            email: '',
            address: '',
            phoneno: '',
        })
        this.props.onUserUpdate();
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        const {displayName, email, address, phoneno} = this.state;
        return (
            <div className='sign-up'>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='text'
                        name='address'
                        value={address}
                        onChange={this.handleChange}
                        label='Address'
                        required
                    />
                    <FormInput
                        type='text'
                        name='phoneno'
                        value={phoneno}
                        onChange={this.handleChange}
                        label='Phone No'
                        required
                    />
                     <Form.Check
                        style={{color: 'white'}}
                        type="radio"
                        label="MEMBER"
                        name="Type"
                        value='member'
                        id="formHorizontalRadios1"
                        onChange={this.handleChange}
                    />
                    <Form.Check
                        style={{color: 'white'}}
                        type="radio"
                        label="TRAINER"
                        name="Type"
                        value='trainer'
                        id="formHorizontalRadios2"
                        onChange={this.handleChange}
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> JOIN </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignUp;



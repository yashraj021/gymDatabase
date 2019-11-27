import React, {Component} from 'react';
import './style.EditingModal.scss';
import {updateUser} from '../../API/firebase.dml';
import {Dropdown} from 'react-bootstrap';

class EditingModal extends Component {
    state = {
        name: this.props.userDetails.name,
        address: this.props.userDetails.address,
        email: this.props.userDetails.email,
        phoneno: this.props.userDetails.phoneno,
        id: this.props.userDetails.id,
        Type: this.props.type,
        trainers: this.props.trainers,
        selectedTrainer: null
    }

    onCloseHandler = (event) => {
        let value = event.target.name;
        this.setState({ [value]: event.target.value })
    }

    onSubmitHandler = async () => {
        let state = {
            name: this.state.name,
            address: this.state.address,
            email: this.state.email,
            phoneno: this.state.phoneno,
            id: this.state.id,
            selectedTrainer: this.state.selectedTrainer,
            Type: this.state.Type
        }
        console.log(state)
        await updateUser(state);
        await this.props.onUserUpdate();
        this.setState({
            name: '',
            address: '',
            email: '',
            phoneno: '',
            id: '',
            selectedTrainer: null,
            Type: this.props.type
        },() => this.props.onCloseHandler())
    }
    
    
    
    render() {
        return(
            <div className = 'ModalView'>
                <div className = 'ModalSpace'>
                    <div className = 'Details'>
                        <div className = "picture">
    
                        </div>
                        <div className = 'userDetails'>
                            <div className = "fields">
                                {'Name: '}
                                <input name = "name" className = "input" placeholder = {this.props.userDetails.name} onChange = {this.onCloseHandler}/>
                            </div>
                            <div className = "fields">
                                {'Address: '}
                                <input name = "address" className = "input" placeholder = {this.props.userDetails.address} onChange = {this.onCloseHandler}/>
                            </div>
                            <div  className = "fields">
                                {'E-mail: '}
                                <input name = 'email'className = "input" placeholder = {this.props.userDetails.email} onChange = {this.onCloseHandler}/>
                            </div>
                            <div  className = "fields" style = {{paddingBottom: 100}}>
                                {'Phone-No: '}
                                <input name = 'phoneno' className = "input" placeholder = {this.props.userDetails.phoneno} onChange = {this.onCloseHandler}/>
                            </div>
                        </div>
                        <div className = 'fields'>
                        {"Assign Trainer:"} 
                        <Dropdown style = {{width: '80%'}}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Select Trainer
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    this.state.trainers.map(x=> <Dropdown.Item key = {x.id} onClick = {() => this.setState({selectedTrainer: x.name})}>{x.name}</Dropdown.Item>
                                    )
                                }
                            </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <button className = 'button' onClick = {this.onSubmitHandler}>
                        Update
                    </button>    
                    <button className = 'button' onClick = {this.props.onCloseHandler}>
                        Close
                    </button>
                </div>
            </div>
        )
    }
}

export default EditingModal;
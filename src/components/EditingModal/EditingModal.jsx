import React, {Component} from 'react';
import './style.EditingModal.scss';
import {updateUser} from '../../API/firebase.dml';
import {Dropdown} from 'react-bootstrap';
import {storageRef} from '../../firebase/firebase.utils';
import DetailField from './DetailField';

class EditingModal extends Component {
    state = {
        name: this.props.userDetails.name,
        address: this.props.userDetails.address,
        email: this.props.userDetails.email,
        phoneno: this.props.userDetails.phoneno,
        id: this.props.userDetails.id,
        Type: this.props.type,
        trainers: this.props.trainers,
        selectedTrainer: null,
        file: '',
        imagePreviewUrl: ''
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
    
    imageChangeHandler(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
        this.setState({
            file: file,
            imagePreviewUrl: reader.result
        })
        }

        reader.readAsDataURL(file)
            
        
    }

    imageSubmitHandler = () => {
        storageRef.child('DisplayPicture/' + `${this.state.id}`).put(this.state.file,{ contentType: 'image/jpeg' })
    }
    
    
    render() {
        return(
            <div className = 'ModalView'>
                <div className = 'ModalSpace'>
                    <div className = 'Details'>
                        <div className = "picture">
                            <input type = 'file' onChange ={(e) => this.imageChangeHandler(e)} onSubmit={(e)=>this._handleSubmit(e)}/>
                                <button className = 'button' onClick = {this.imageSubmitHandler}>
                                    Upload
                                </button>
                        </div>
                        <DetailField userDetails = {this.props.userDetails} onCloseHandler = {this.onCloseHandler}/>
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
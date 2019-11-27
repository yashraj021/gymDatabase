import React, {Component} from 'react';
import './style.EditingModal.scss';
import {updateUser} from '../../API/firebase.dml';

import {storageRef, storage} from '../../firebase/firebase.utils';
import DetailField from './DetailField';
import ProfilePicture from './ProfilePicture';

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
        imagePreviewUrl: '',
        imageURL: this.props.userDetails.imageURL,
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
            Type: this.state.Type,
            imageURL: this.state.imageURL
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
            Type: this.props.type,
            imageURL: ''
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

    imageSubmitHandler = async () => {
       await storageRef.child('DisplayPicture/' + `${this.state.id}`).put(this.state.file,{ contentType: 'image/jpeg' });
       await storage.ref('DisplayPicture/' + `${this.state.id}`).getDownloadURL().then( url => this.setState({imageURL: url}));
       
    }
    
    
    render() {
        return(
            <div className = 'ModalView'>
                <div className = 'ModalSpace'>
                    <div className = 'Details'>
                        <ProfilePicture imageURL = {this.state.imageURL} imageChangeHandler = {(e) => this.imageChangeHandler(e)} imageSubmitHandler = {this.imageSubmitHandler}/>
                        <DetailField 
                            userDetails = {this.props.userDetails} 
                            onCloseHandler = {this.onCloseHandler} 
                            trainers = {this.state.trainers} 
                            onTrainerSelectHandler = { (x) => this.setState({selectedTrainer: x.id}) }
                        />     
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
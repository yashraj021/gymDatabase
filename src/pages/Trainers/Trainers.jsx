import React, { Component } from 'react'
import './style.Trainers.scss';
import UserList from '../../components/UserList/UserList';
import MemberDetailsModal from '../../components/TrainerDetailsModal/TrainerDetailsModal';
import EditingModal from '../../components/EditingModal/EditingModal';
import PageSubHeader from '../../components/PageSubHeader/PageSubHeader';

class Trainers extends Component {
    
    state = {
        users: this.props.users,
        searchfield: '',
        modalFlag: false,
        editingModal: false,
        editingModalDetail: []
    };

    

    onChangeHandler = (event) => {
        this.setState({searchfield: event.target.value}, () => console.log(this.state.searchfield))
    };


    onCloseHandler = () => {
        this.setState({modalFlag: false})
    };

    filteredUsers = () => this.state.users.filter(user => {
        return user.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    
    

    render() {
        
        return (
            <div className='parent'>
                <PageSubHeader onChangeHandler = {this.onChangeHandler} Type = {'Trainers'}/>
                <UserList users={this.filteredUsers} 
                    cb={this.onClickHandler} 
                    ondelete = {(id) => this.props.onDelete(id)}
                    modalCb = {(user) => this.setState({editingModal: true, editingModalDetail: user},()=> console.log(this.state.editingModalDetail))}
                />
                {
                    this.state.editingModal? <EditingModal onUserUpdate={this.props.onUserUpdate} onCloseHandler = {()=> this.setState({editingModal: false})} type = {"trainer"} userDetails = {this.state.editingModalDetail}/>: null
                }
                {/* {
                    this.state.modalFlag ? (<MemberDetailsModal  onCloseHandler={this.onCloseHandler}/>) : null
                } */}
            </div>
        )
    }
}

export default Trainers;
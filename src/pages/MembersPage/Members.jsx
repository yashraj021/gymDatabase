import React, { Component } from 'react'
import './style.Members.scss';
import MemberList from '../../components/MemberList/MemberList';
import users from './users';
import MemberDetailsModal from '../../components/MemberDetailsModal/MemberDetailsModal';

class Members extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: users,
            searchfield: '',
            modalFlag: false
        }
    }
    
    onChangeHandler = (event) => {
        this.setState({searchfield: event.target.value},()=> console.log(this.state.searchfield))
    }

    onClickHandler = () => {
        this.setState({modalFlag: true})
    } 

    render() {
        const filteredUsers = this.state.users.filter(user =>{
            return user.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
          })
        return(
            <div className = 'parent'>
                <div className = 'header'>
                    <div className = 'Topic'>
                        Members
                    </div> 
                    <div className = 'SearchArea'>
                        <div>
                            <input className = 'SearchBox' placeholder = 'Search' onChange = {this.onChangeHandler}/>
                        </div>
                        <button className = 'button'>
                            Search
                        </button>
                    </div>
                </div>
                <MemberList users = {filteredUsers} cb = {this.onClickHandler}/>
                {
                    this.state.modalFlag? (<MemberDetailsModal/>): null
                }
            </div>
        )
    }
}

export default Members;